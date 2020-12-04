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
            <h1 className="title">Зарегистрируйся чтобы получить возможность</h1>
                <p className="hidden-text">наверное, если не будет лень</p>
            <h1 className="title">навести порядок в хранилищах своего хлама</h1>
            
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-input">
                    <p>Имя пользователя</p>
                    {errors.username && <p className="form-error">{errors.username.message}}</p>}
                    <input 
                        name='username' 
                        ref={register({
                            required: "Ты кто?"
                        })
                    }/>
                    <p>Пароль</p>
                    {errors.password && <p className="form-error">{errors.password.message}</p>}
                    <input 
                        name='password'
                        type="password"
                        ref={register({
                            required: "Пароль придется ввести"
                        })
                    }/>
                    <p>Повторите пароль</p>
                    {errors.match_password && <p className="form-error">{errors.match_password.message}</p>}
                    <input 
                        name='match_password'
                        type="password"
                        ref={register({
                            required: "Пароль придется ввести еще раз",
                            validate: value =>
                                value === password.current || "Пароли не совпадают"
                        })
                    }/>
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit)} >Войти</button>
            </form>

            <p>или можно просто <Link to="/signin">войти</Link></p>
        </main>
    )
}