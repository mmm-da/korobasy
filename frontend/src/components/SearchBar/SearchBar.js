import React from "react";

import "./SearchBar.css";

export default function SearchBar(){
    return(
        <div className="search_bar">
            <input className="search_input" placeholder="Нерабочая строка поиска"/>
        </div>
    )
}