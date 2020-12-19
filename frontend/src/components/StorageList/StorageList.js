import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './StorageList.css'
import {useApi} from "../../useApi";
import StorageElement from "../StorageElement/StorageElement";

export default function StorageList(props){
    const api = useApi();

    const [storage,setStorage] = useState(null);

    useEffect(
        ( )=> {
            api.getStorage("c2e9f25d-9ae5-4693-af3f-2480735ee826").then(
                (result)=>{
                    setStorage(result)
                }
            )

        }
        ,[])
    return(
        <div>
            <StorageElement storageInfo={storage}/>
        </div>
    )
}