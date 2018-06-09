"use strict"

/* --- This CLIENT APP will run on: http://localhost:3005/  --- */

// REACT
import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { hashHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// DÙNG MIDDLEWARE 1
const middleware = applyMiddleware(thunk, logger);
// WE WILL PASS INITIAL STATE FROM SERVER STORE

const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);


import routes from './routes'
const Routes = (
    <Provider store={store}>
        {routes}
    </Provider>
);

// ReactDOM.render(Routes, document.getElementById('app'));
ReactDOM.hydrate(Routes, document.getElementById('app'));
// Replace the render() when render in server