import React from 'react'
import {Link} from "react-router-dom";
import './NavBar.css'


export default function NavBar(){
    const isAuth = false
    const username = "Пользователь"
    return(
        <nav className='navbar'>
            <Link to="/" className="navbar-item navbar-logo">Коробасы</Link>
                {
                    isAuth ? 
                    <div className="push-right">
                        <Link to="/profile" className="navbar-item">{username}</Link>
                        <Link to="/" className="navbar-item">Выход</Link>
                    </div>:
                    <div className="push-right">
                        <Link to="/signin" className="navbar-item">Вход</Link>
                        <Link to="/signup" className="navbar-item">Регистрация</Link>
                    </div>
                    
                }
        </nav>
    );
}