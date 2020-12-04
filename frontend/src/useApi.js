import React, { useState, useEffect, useContext, createContext } from "react";
import baseUrl from './constants'
import { useAuth } from "./useAuth";
import axios from 'axios'

const apiContext = createContext();

export function ProvideApi({ children }) {
  const auth = useProvideApi();
  return <apiContext.Provider value={auth}>{children}</apiContext.Provider>;
}

export const useApi = () => {
  return useContext(apiContext);
};

function useProvideApi() {
    const auth = useAuth();

    const getUserInfo = async () => {
        try{
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/users/${auth.userId.toString()}`,
                headers: {
                    Authorization: `Bearer ${auth.getAccessToken().toString()}`
                }
            });
            return response.data;
        }
        catch (e){
            return null
        }
    }


    return {
    
    };
}