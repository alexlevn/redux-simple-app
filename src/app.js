"use strict"
import {createStore} from 'redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index'

// STEP 1: create the store
const store = createStore(reducers);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    // console.log('current price: - ', store.getState()[0].price);
})

store.dispatch({
    type: "POST_BOOK",
    payload: [
        {
            id: 1,
            title: "this is a book",
            description: "this is the book description",
            price: 33
        }, {
            id: 2,
            title: "this is a book",
            description: "this is the book description",
            price: 50
        }
    ]
});

store.dispatch({
    type: 'POST_BOOK',
    payload: [
        {
            id: 3,
            title: "the third book",
            description: 'the third book\'s description',
            price: 100

        }
    ]
});

store.dispatch({
    type: 'DELETE_BOOK',
    payload: {
        id: 1
    }
});

store.dispatch({
    type: 'UPDATE_BOOK',
    payload: {
        id: 2,
        title: 'Learn React in 24h!...'
    }
});

// ---->> CART ACTIONS <----- ADD to cart
store.dispatch({
    type: 'ADD_TO_CART',
    payload: [
        {
            id: 2
        }
    ]
});