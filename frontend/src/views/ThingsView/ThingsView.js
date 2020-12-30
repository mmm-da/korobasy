import React, {useState} from "react";

import "../css/View.css"
import {AddInstance, AddThing} from '../../components/AddTooltip/AddTooltip'
import ThingsList from "../../components/ThingsList/ThingsList";

export default function StoragesView() {
    return (
        <main className="view">
            <div className="title-container">
                <h1 className="title">Штуки</h1>
                <AddThing/>
                <AddInstance/>
            </div>
            <ThingsList/>
        </main>
    )
}