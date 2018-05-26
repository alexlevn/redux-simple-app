"use strict"

/* --- This CLIENT APP will run on: http://localhost:3005/  --- */

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { hashHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// reducer = module.export( default combineReducers{....})

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { getBooks, postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// STEP 1: create the store const middleware = applyMiddleware(logger()); // old
// version

// DÙNG MIDDLEWARE 1
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

// MIDDLE WARE: Debug on Redux Console.
// const store = createStore(reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import Cart from './components/pages/cart';
import BooksList from './components/pages/booksList';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const About = () => (
    <div>
        About page.
    </div>
);
const Contact = () => (
    <div>
        Contact page.
    </div>
);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BooksForm} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

render(Routes, document.getElementById('app'));