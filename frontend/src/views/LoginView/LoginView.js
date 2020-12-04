import React from "react";
import {Link} from "react-router-dom";
import { useApi } from "../../useApi";
import { useAuth } from "../../useAuth";
import { useForm } from "react-hook-form";
import "../css/View.css"

export default function ResetView(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data.username,data.password);

    return(
        <main className="view">
            <h1 className="title">Вход в хранилище хлама</h1>
            
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-input">
                    <p>Имя пользователя</p>
                    {errors.username && <p className="form-error">{errors.username.message}}</p>}
                    <input 
                        name='username'
                        ref={register({
                            required: "Ты кто?"
                        })}
                    />
                    <p>Пароль</p>
                    {errors.password && <p className="form-error">{errors.password.message}</p>}
                    <input 
                        name='password' 
                        type="password" 
                        ref={register({
                            required: "Пароль придется ввести"
                        })}
                    />
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit)} >Войти</button>
            </form>
            
            <p>
                <Link to="/reset_password">Забыл пароль</Link> че делать?
            </p>
        </main>
    )
}