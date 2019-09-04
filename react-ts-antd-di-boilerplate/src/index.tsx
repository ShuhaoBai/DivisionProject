import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { InjectionProvider, appContainer } from 'services/container';
import * as serviceWorker from 'services/serviceWorker';


ReactDOM.render(
    <InjectionProvider container={appContainer}>
        <App />
    </InjectionProvider>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();