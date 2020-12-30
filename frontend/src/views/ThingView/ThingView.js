import React, {useEffect, useState} from "react"

import "../css/View.css"
import "./ThingView.css"
import {useParams} from "react-router";
import {useApi} from "../../useApi";
import {Spinner} from "../../components/Spinner/Spinner";

export default function ThingView() {
    let {id} = useParams();
    const [thing,setThing] = useState(null);
    const api = useApi();

    useEffect(
        () => {
            api.getThing(id).then(
                (result) =>{
                    setThing(result);
                }
            )
        }, [api.getThing])

    if (thing){
        return (
            <main className="view">
                <div className="thing-page-header">
                    <svg className="things-list-element-icon"
                         viewBox="0 0 16 16"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                    </svg>
                    <h1>{thing.name}</h1>
                </div>
                <div className="thing-page-body">
                    <div className="thing-page-content">
                        <h3>Подробная информация</h3>
                        <table>
                            <tbody>
                            {thing.description}
                            </tbody>
                        </table>
                    </div>
                    <div className="thing-page-content">
                        <h3>Где лежит? (НЕ РАБОТАЕТ)</h3>
                        <table>
                            <tbody>
                            <tr>
                                <td>Ящик 1 секция А1</td>
                                <td className="thing-table-count"> 2 шт</td>
                            </tr>
                            <tr>
                                <td>Ящик 1 секция B4</td>
                                <td className="thing-table-count">200 шт</td>
                            </tr>
                            <tr>
                                <td>Ящик 32 секция G10</td>
                                <td className="thing-table-count">96 шт</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        )
    }else{
        return <Spinner spinnerSize="medium"/>
    }

}