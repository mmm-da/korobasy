import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import './NavBar.css'
import {useAuth} from "../../useAuth";
import {useApi} from "../../useApi";

export default function NavBar(){
    const auth = useAuth();
    const api = useApi();
    const [username,setUsername] = useState(null);

    const LogoutEvent = () => {
        auth.logout();
    }

    return(
        <nav className='navbar'>
            <Link to="/" className="navbar-item navbar-logo">Коробасы</Link>
                {
                    auth.loginStatus === "loginSuccess" ?
                    <>
                        <Link to="/things" className="navbar-item">Штуки</Link>
                        <Link to="/storages" className="navbar-item">Хранилища</Link>
                        <div className="push-right">
                            <Link to="/profile" className="navbar-item">
                                {auth.user ? auth.user.username : 'АГА'}
                            </Link>
                            <Link to="/" onClick={LogoutEvent} className="navbar-item">Выход</Link>
                        </div>
                    </>:
                    <div className="push-right">
                        <Link to="/signin" className="navbar-item">Вход</Link>
                        <Link to="/signup" className="navbar-item">Регистрация</Link>
                    </div>
                    
                }
        </nav>
    );
}