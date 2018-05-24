'use strict'

// REACT 
import React from 'react';
import { render } from 'react-dom';

// For Layout
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Router in react-router@3

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// From my App: Reducers
import { combineReducers } from 'redux';

function booksReducers(state = { books: [] }, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function cardReducers(state = { cards: [] }, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const reducers = combineReducers({
    books: booksReducers,
    card: cardReducers
});

// From my App: Actions

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// From my App: Components
import Main from './components/main'

const BooksList = () => (
    <div> BooksList page </div>
);

const Cart = () => (
    <div> Cart page </div>
);

const About = () => (
    <div>About page</div>
);

const Contact = () => (
    <div>Contact page</div>
);

const Admin = () => (
    <div>Admin page</div>
);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={Admin} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

render(Routes, document.getElementById('app'));

