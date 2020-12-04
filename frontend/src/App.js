import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RegisterView from "./views/RegisterView/RegisterView";
import MainView from "./views/MainView/MainView";
import LoginView from "./views/LoginView/LoginView";
import ThingView from "./views/ThingView/ThingView";
import ResetView from "./views/ResetView/ResetView";

import "./css/App.css"

import {ProvideAuth} from './useAuth'
import {ProvideApi}  from "./useApi";

export default function App(){
    return(
        <ProvideAuth>
            <ProvideApi>
                <BrowserRouter>
                    <div className="container">
                        <NavBar/>
                            <Switch>
                                <Route exact path="/" component={MainView}/>
                                <Route path="/signin" component={LoginView}/>
                                <Route path="/signup" component={RegisterView}/>
                                <Route path="/thing" component={ThingView}/>
                                <Route path="/reset_password" component={ResetView}/>
                            </Switch>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </ProvideApi>
        </ProvideAuth>
    )
}