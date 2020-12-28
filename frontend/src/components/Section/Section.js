import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Spinner} from "../Spinner/Spinner";
import {EditStorage} from "../AddTooltip/AddTooltip";
import {useApi} from "../../useApi";
import Instance from "../Instance/Instance";

export default function Section(props) {
    const data = props.data
    const [instances,setInstances] = useState([]);
    const api = useApi();

    const getInstances = async (uuidList) => {
            return Promise.all(
                uuidList.map(
                    uuid => api.getInstance(uuid)
                )
            );
    }

    useEffect(
        ()=>{
            getInstances(data.things_in_sections).then(
                result => {
                    setInstances(
                        result.map(el => <Instance key={el.id} data={el}/> )
                    )
                }
            )

        },[]
    )

    if (data == null) {
        return <Spinner spinnerSize='medium'/>
    } else {
        return (
            <div>
                <h2>{data.name}</h2>
                {instances ? instances : <Spinner spinnerSize='medium'/>}
            </div>
        )
    }
}