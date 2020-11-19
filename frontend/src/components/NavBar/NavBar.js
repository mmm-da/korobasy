import React from 'react'
import {Link} from "react-router-dom";
import './NavBar.css'

export default function NavBar(){
    return(
        <nav className='navbar'>
            <Link to="/" className="navbar-item navbar-logo">Коробасы</Link>
            <div className="push-right">
                <Link to="/auth" className="navbar-item">Вход</Link>
                <Link to="/register" className="navbar-item">Регистрация</Link>
            </div>
        </nav>
    );
}