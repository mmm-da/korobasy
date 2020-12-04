import React,{ useRef } from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

import "../css/View.css"


export default function RegisterView(){
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
        console.log(JSON.stringify(data));
    };
    return(
        <main className="view">
            <h1 className="title">Смену пароля я сделать не успел</h1>
        </main>
    )
}