"use strict"
import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import {addToCard} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1: create the store
// const middleware = applyMiddleware(logger()); // old version
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    // console.log('current price: - ', store.getState()[0].price);
})

store.dispatch(postBooks([
    {
        id: 1,
        title: "this is the first book",
        description: "this is the first book's description",
        price: 33
    }, {
        id: 2,
        title: "this is a seconde book",
        description: "this is the second book's description",
        price: 50
    }
]))

store.dispatch(postBooks({id: 3, title: "the third book", description: 'the third book\'s description', price: 100}));

store.dispatch(deleteBooks({id: 1}));

store.dispatch(updateBooks({id: 2, title: 'Learn REDUX in 24H!..'}));

// ---->> CART ACTIONS <----- ADD to cart Replact the pureaction by the
// cardAction
store.dispatch(addToCard([{
        id: 1
    }
]));