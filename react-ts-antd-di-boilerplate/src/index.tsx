import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import App from '@default/components/App';
import employeeService from '@extensions/services/EmployeeService';
import * as serviceWorker from '@default/services/serviceWorker';

configure({
    enforceActions: 'observed'
});

// Services that will be provided to components
const services = {
    employeeService
}

ReactDOM.render((
    <Provider {...services}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();