import React, {useEffect, useState} from "react";

import "../css/View.css"
import StorageList from "../../components/StorageList/StorageList";
import {AddStorage} from '../../components/AddTooltip/AddTooltip'
import {useParams} from "react-router";
import StorageElement from "../../components/StorageElement/StorageElement";
import {Spinner} from "../../components/Spinner/Spinner";
import {useApi} from "../../useApi";
import Storage from "../../components/Storage/Storage";

export default function StorageView() {
    let {id} = useParams();
    const [storage,setStorage] = useState(null);
    const api = useApi();

    useEffect(
        () => {
            api.getStorage(id).then(
                (result) =>{
                    setStorage(result);
                }
            )
        }, [api.getStorage])

    return (
        <main className="view">
            {storage ? <Storage data={storage}/> : <Spinner spinnerSize="medium"/>}
        </main>
    )
}