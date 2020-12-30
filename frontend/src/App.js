import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import RegisterView from "./views/RegisterView/RegisterView";
import MainView from "./views/MainView/MainView";
import LoginView from "./views/LoginView/LoginView";
import ThingView from "./views/ThingView/ThingView";
import ResetView from "./views/ResetPasswordView/ResetPasswordView";
import ProfileView from "./views/ProfileView/ProfileView";
import StoragesView from "./views/StoragesView/StoragesView";

import "./css/App.css"

import {useAuth} from "./useAuth";
import StorageView from "./views/StorageView/StorageView";
import ThingsView from "./views/ThingsView/ThingsView";


export default function App() {
    const auth = useAuth();
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/signin" component={LoginView}/>
                    <Route path="/signup" component={RegisterView}/>
                    <Route path="/things/" component={ThingsView}/>
                    <Route path="/thing/:id" component={ThingView}/>
                    <Route path="/reset_password" component={ResetView}/>
                    <Route path="/profile" component={ProfileView}/>
                    <Route path="/storages" component={StoragesView}/>
                    <Route path="/storage/:id" component={StorageView}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}