import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store.js';
import Routes from './routes.js';

import './sass/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={CONTEXT_ROOT}>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('origin')
);
