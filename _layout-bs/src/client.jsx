'use strict'

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// COMPONENTS

// NOTE * This bug will run not exactly, but there is no error message
// import { Main } from './main'; 
import Main  from './main';

const About = () => (
    <div>
        About pages.
    </div>
);
const Contact = () => (
    <div>
        Contact pages.
    </div>
);
const BooksForms = () => (
    <div>
        BooksForms pages.
    </div>
);
const BooksList = () => (
    <div>
        BooksList pages.
    </div>
);
const Cart = () => (
    <div>
        Cart pages.
    </div>
);

// FOR REDUX APP
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const reducers = function booksReducers(state = { books: [] }, action) {
    switch (action.type) {
        default:
            return state;
            break
    }
}

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BooksForms} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);


render(Routes, document.getElementById('app'));