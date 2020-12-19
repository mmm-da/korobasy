import React from "react";
import {Link} from "react-router-dom";
import { useApi } from "../../useApi";
import { useAuth } from "../../useAuth";
import "../css/View.css"
import LoginForm from "../../components/LoginForm/LoginForm";

export default function ResetView(){
    return(
        <main className="view">
            <h1 className="title">Вход в хранилище хлама</h1>
            <LoginForm/>
            <p>
                <Link to="/reset_password">Забыл пароль</Link> че делать?
            </p>
        </main>
    )
}