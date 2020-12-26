import React, {createContext, useContext} from "react";
import baseUrl from './constants'
import {useAuth} from "./useAuth";
import axios from 'axios'

const apiContext = createContext();

export function ProvideApi({children}) {
    const auth = useProvideApi();
    return <apiContext.Provider value={auth}>{children}</apiContext.Provider>;
}

export const useApi = () => {
    return useContext(apiContext);
};

function useProvideApi() {
    const auth = useAuth();

    const getThing = async (uuid) => {
        try {
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/things/${uuid.toString()}`,
                headers: {
                    Authorization: `Bearer ${auth.accessToken.toString()}`
                }
            });
            return response.data;
        } catch (e) {
            return null
        }
    }

    const getStorage = async (uuid) => {
        let accessToken = await auth.getAccessToken();
        try {
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/storages/${uuid.toString()}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const data = await response.data;
            return data;
        } catch (e) {
            return null
        }
    }

    const postStorage = async (name) => {
        let accessToken = await auth.getAccessToken();
        const username = auth.user.username
        const data = {
            name: name,
            owner: username,
            sections: [],
            tags: []
        }
        console.log(data)
        try {
            const response = await axios({
                method: 'post',
                url: baseUrl + `/api/storages/`,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                data: {
                   name: name,
                   owner: username,
                   sections: [],
                   tags: []
                }
            });
        }catch (e){}
    }

    const getSection = async (uuid) => {
        try {
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/sections/${uuid.toString()}`,
                headers: {
                    Authorization: `Bearer ${auth.accessToken.toString()}`
                }
            });
            return response.data;
        } catch (e) {
            return null
        }
    }

    const getInstance = async (uuid) => {
        try {
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/instances/${uuid.toString()}`,
                headers: {
                    Authorization: `Bearer ${auth.accessToken.toString()}`
                }
            });
            return response.data;
        } catch (e) {
            return null
        }
    }

    const getCategory = async (uuid) => {
        try {
            const response = await axios({
                method: 'get',
                url: baseUrl + `/api/category/${uuid.toString()}`,
                headers: {
                    Authorization: `Bearer ${auth.accessToken.toString()}`
                }
            });
            return response.data;
        } catch (e) {
            return null
        }
    }


    return {
        getStorage,
        postStorage
    };
}