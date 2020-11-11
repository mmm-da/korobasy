import React from "react";
import {Link} from "react-router-dom";
import './ThingsListElement.css'

export default function ThingsListElement(){
    return(
        <Link to="/thing/:id">
        <li className="things_list_element">

            <svg className="things_list_element_icon"
                 viewBox="0 0 16 16"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
            </svg>
                <p className="things_list_element_title">Штука</p>
                <p className="things_list_element_count">10 шт</p>
                <p className="things_list_element_place">Коробка № NaN</p>
                <p className="things_list_element_reserve">Зарезервировано NaN штук</p>
        </li>
        </Link>
    )
}