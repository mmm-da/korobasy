import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ProvideAuth} from "./useAuth";
import {ProvideApi} from "./useApi";

ReactDOM.render(
    <ProvideAuth>
        <ProvideApi>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ProvideApi>
    </ProvideAuth>,
    document.getElementById('root')
);