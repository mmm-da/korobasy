import React, {useEffect, useState} from "react";
import "./ThingsList.css"
import {useApi} from "../../useApi";
import ThingsListElement from "../ThingListElement/ThingsListElement";

export default function ThingsList(props) {
    const [thingsComponents,setThingsComponents] = useState(null)
    const api = useApi();
    useEffect(
        () => {
            api.getThings().then(
                (result)=>{
                    setThingsComponents(
                        result.map(thing => <ThingsListElement thing={thing}/>)
                    )
                }
            )
        }, []
    );

    return (
        <div className="things-list">
            {thingsComponents}
        </div>
    )
}