"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCard} from './actions/cartActions';
import {getBooks, postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1: create the store const middleware = applyMiddleware(logger()); // old
// version
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList'

render(
    <Provider store={store}>
    <BooksList/>
</Provider>, document.getElementById('app'))

// store.subscribe(function () {     console.log('current state is: ',
// store.getState());     // console.log('current price: - ',
// store.getState()[0].price); }) store.dispatch(postBooks([ ])) ---->> CART
// ACTIONS <----- ADD to cart Replact the pureaction by the cardAction
// store.dispatch(addToCard([     {         id: 1     } ]));