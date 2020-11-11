import React from "react";
import ThingsListHeader from "../ThingsListHeader/ThingsListHeader";
import ThingsListElement from "../ThingListElement/ThingsListElement";
import "./ThingsList.css"

export default function ThingsList(){
    return(
        <div className="things_list">
            <ThingsListHeader/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
            <ThingsListElement/>
        </div>
    )
}