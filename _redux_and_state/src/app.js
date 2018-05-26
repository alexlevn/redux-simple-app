'use strict'

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

// REDUCERS: ----------------------------------------------------
import { combineReducers } from 'redux';

const booksReducers = function (state = { books: [] }, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                books: [...state.books]
            }
            break;

        case 'POST_BOOKS':
            // console.log('Posting: payload = ', action.payload);
            return {
                books: [
                    ...state.books,
                    ...action.payload
                ]
            }
            break;

        case 'UPDATE_BOOKS':
            const currentBooksToUpdate = [...state.books];
            const indexToUpdate = currentBooksToUpdate.findIndex(book => book.id === action.payload.id);
            const updatedBook = {
                ...currentBooksToUpdate[indexToUpdate],
                title: action.payload.title,
                description: action.payload.description
            }
            return {
                books: [
                    ...currentBooksToUpdate.slice(0, indexToUpdate),
                    updatedBook,
                    ...currentBooksToUpdate.slice(indexToUpdate + 1)
                ]
            }
            break;

        case 'DELETE_BOOKS':
            const currentBooksToDelete = [...state.books];
            const indexToDelete = currentBooksToDelete.findIndex(book => book.id === action.payload.id);
            return {
                books: [
                    ...currentBooksToDelete.slice(0, indexToDelete),
                    ...currentBooksToDelete.slice(indexToDelete + 1)
                ]
            }
            break;

        default:
            return state;
    }
}

const cardReducers = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                cart: [
                    ...cart,
                    ...action.payload
                ]
            }
            break;
        default:
            return state;
    }
}

const reducers = combineReducers({
    books: booksReducers,
    cart: cardReducers
})

// ACTIONS ----------------------------------------------------

// cardActions
function addToCard(book) {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

// booksActions: export for components files
export function getBooks() {
    return { type: 'GET_BOOKS' }
}

function postBooks(book) {
    return { type: 'POST_BOOKS', payload: book }
}

function deleteBooks(id) {
    return { type: 'DELETE_BOOKS', payload: { id } }
}

function updateBooks(book) {
    return { type: 'UPDATE_BOOKS', payload: book }
}

// STEP 1: create the store:
// const store = createStore(reducer);
// MIDDLEWARE:
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// DEBUG: 
// store.subscribe(() => {
//     console.log('current state is: ', store.getState());
// });

import BooksList from './components/booksList';

render(
    <Provider store={store}>
        <BooksList />
    </Provider>, document.getElementById('app')
)

let action_a = postBooks([
    {
        id: 1,
        title: 'Quyen sach dau tien',
        description: 'Mo ta quyen sach',
        price: 11
    },
    {
        id: 2,
        title: 'Quyen sach THU HAI',
        description: 'Mo ta quyen THU HAI',
        price: 22
    }]
);

let action_b = updateBooks({ id: 2, title: 'QUYEN SO HAI', description: 'DESCRIPTION' })

store.dispatch(action_a);
store.dispatch(action_b);
