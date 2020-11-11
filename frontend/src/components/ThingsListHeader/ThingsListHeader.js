import React from "react";
import './ThingsListHeader.css'

export default function ThingsListHeader(){
    return(
        <div className="things_list_header">
            <h2 className="title">Все штуки</h2>
            <div>
                <button>Добавить штуку</button>
            </div>
        </div>
    )
}