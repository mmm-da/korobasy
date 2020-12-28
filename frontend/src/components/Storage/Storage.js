import React, {useEffect, useState} from "react";
import {Spinner} from "../Spinner/Spinner";
import {EditStorage} from "../AddTooltip/AddTooltip";
import {useApi} from "../../useApi";
import Section from "../Section/Section";
import {useAuth} from "../../useAuth";

export default function Storage(props) {
    const data = props.data
    const [sections,setSections] = useState(null);
    const api = useApi();

    const getSections = async (uuidList) => {
        return Promise.all(
            uuidList.map(
                uuid => api.getSection(uuid)
            )
        );
    }

    useEffect(
        ()=>{
            getSections(data.sections).then(
                result => {
                    setSections(
                        result.map(el => el ? <Section key={el.id} data={el}/> : null)
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
                <EditStorage storage={data}/>
                {sections ? sections : <Spinner spinnerSize='medium'/>}
            </div>
        )
    }
}