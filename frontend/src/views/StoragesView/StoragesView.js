import React,{ useRef } from "react";
import {Link} from "react-router-dom";

import "../css/View.css"
import StorageList from "../../components/StorageList/StorageList";


export default function StoragesView(){
    return(
        <main className="view">
            <h1 className="title">Хранилища</h1>
            <StorageList/>
        </main>
    )
}