import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './ThingsListElement.css'
import {useApi} from "../../useApi";

export default function ThingsListElement(props) {
    const thingInfo = props.thing
    const api = useApi();
    const getInstances = async (uuidList) => {
        return Promise.all(
            uuidList.map(
                uuid => api.getInstance(uuid)
            )
        );
    }

    return (
        <Link to={`/thing/${thingInfo.id}`}>
            <li key={thingInfo.id} className="things-list-element">

                <svg className="things-list-element-icon"
                     viewBox="0 0 16 16"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                </svg>
                <h3 className='things_list_element_title'>{thingInfo.name}</h3>
            </li>
        </Link>
    )
}