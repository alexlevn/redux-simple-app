"use strict"

/* --- This CLIENT APP will run on: http://localhost:3005/  --- */

// REACT
import React from 'react';
import { render } from 'react-dom';

// REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

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

const routes = (

    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BooksList} />
            <Route path="/admin" component={BooksForm} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
        </Route>
    </Router>
);

export default routes;