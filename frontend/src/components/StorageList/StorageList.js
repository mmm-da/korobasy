import React, {useEffect, useState} from "react";
import './StorageList.css'
import {useApi} from "../../useApi";
import StorageElement from "../StorageElement/StorageElement";
import {useAuth} from "../../useAuth";
import {Spinner} from "../Spinner/Spinner";

export default function StorageList(props) {
    const api = useApi();
    const auth = useAuth();

    const [components, setComponents] = useState(null);
    const getStorages = async (uuidList) => {
        return Promise.all(
            uuidList.map(
                uuid => api.getStorage(uuid)
            )
        );
    }

    useEffect(
        () => {
            const user = auth.user;
            if (user != null) {
                getStorages(user.storages).then(
                    data => {
                        setComponents(
                            data.map(data => <StorageElement key={data.id} storageInfo={data}/>)
                        )
                    }
                )
            } else {
                setComponents(<Spinner spinnerSize="medium"/>)
            }
        }, [auth.user, api.getStorage])

    return (
        <ul className="storage-list">
            {components ? components : <Spinner spinnerSize="medium"/> }
        </ul>
    )
}