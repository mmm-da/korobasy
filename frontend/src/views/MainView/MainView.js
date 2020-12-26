import React from "react";
import AnonMainView from "./AnonMainView";
import AuthMainView from "./AuthMainView";
import "../css/View.css"
import {useAuth} from "../../useAuth";

export default function MainView(props) {
    const auth = useAuth();
    return auth.loginStatus === 'loginSuccess' ? <AuthMainView/> : <AnonMainView/>
}