import React, { useState, useEffect, useContext, createContext } from "react";
import baseUrl from './constants'
import axios from 'axios'

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
    const [refreshToken,setRefreshToken] = useState(
        window.localStorage.getItem('refrashToken')
        );
    const [accessToken,setAccessToken] = useState(
            window.localStorage.getItem('accessToken')
        );
            
    const [userId, setUserId] = useState(null);

    const getUserId = async () =>{
        const token = await getAccessToken().toString()
        console.log(token)
        try{
            const response = await axios({
                method: 'get',
                url: baseUrl + '/auth/users/me',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.id;
        }
        catch (e){
            return null
        }
    }
    
    const getAccessToken = async () => {
        var accessToken =  window.localStorage.getItem('accessToken');
        if (await verifyToken(accessToken)){
            return accessToken;
        }else{
            const refreshToken = await getRefreshToken();
            try{
                const response = await axios({
                    method: 'post',
                    url: baseUrl + '/auth/jwt/refresh',
                    data: {
                        refresh: refreshToken.toString()
                    }
                });
                window.localStorage.setItem('accessToken',response.data.access);
                setAccessToken(response.data.access);
                return response.data.access;
            }
            catch (e){
                window.localStorage.removeItem('accessToken');
                setAccessToken(null);
                setUserId(null);
                throw Error('Reset token is invalid. Need to login again')
            }
        }
    }
    
    const getRefreshToken = async () => {
        var refreshToken =  window.localStorage.getItem('refreshToken');
        if (await verifyToken(refreshToken)){
            return refreshToken;
        }else{
            window.localStorage.removeItem('refreshToken');
            throw Error('Reset token is invalid. Need to login again')
        }
    }

    const verifyToken = async (token) =>{
        if (token === '' || token === null) return false;
        try{
            const response = await axios({
                method: 'post',
                url: baseUrl + '/auth/jwt/verify',
                data: {
                    token: token,
                }
            });
            return true;
        }
        catch (e){
            return false;
        }
    }

    const login = async (username, password) => {
        try{
            const response = await axios({
                method: 'post',
                url: baseUrl + '/auth/jwt/create',
                data: {
                    username: username.toString(),
                    password: password.toString()
                }
            });
            const data = response.data;
            window.localStorage.setItem('accessToken',data.access);
            window.localStorage.setItem('refreshToken',data.refresh);
            setAccessToken(data.access);
            setUserId(await getUserId())
        }
        catch (e){
            setUserId(null)
        }
    };

    const signup = (username, password) => {

    };

    const signout = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        setUserId(null);
        setAccessToken(null);
    };

    const sendPasswordResetEmail = email => {

    };

    const confirmPasswordReset = (code, password) => {

    };

    return {
        userId,
        getAccessToken,
        login,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}