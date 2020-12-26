import React, {useState} from "react";

import "../css/View.css"
import StorageList from "../../components/StorageList/StorageList";
import {AddStorage} from '../../components/AddTooltip/AddTooltip'

export default function StoragesView() {
    return (
        <main className="view">
            <div className="title-container">
                <h1 className="title">Хранилища</h1>
                <AddStorage/>
            </div>
            <StorageList/>
        </main>
    )
}