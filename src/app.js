"use strict"

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// reducer = module.export( default combineReducers{....})

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { getBooks, postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// STEP 1: create the store const middleware = applyMiddleware(logger()); // old
// version
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList'

render(
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
);

let action_a = postBooks({
    id: 4,
    title: 'Tôi là người Xây Dựng',
    description: 'Viết về cách tôi Xây dựng hệ thống. Tạo ra giá trị',
    price: 44
});
store.dispatch(action_a);

let action_c = addToCart({ id: 1 });
store.dispatch(action_c);

let action_d = addToCart({ id: 2 });
store.dispatch(action_d);