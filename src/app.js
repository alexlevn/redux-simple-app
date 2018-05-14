"use strict"
import {createStore} from 'redux';

const reducer = function (state = {
    books: []
}, action) {
    switch (action.type) {
        case "POST_BOOK":
            // let books = state.books.concat(action.payload); return {books};
            return {
                books: [
                    ...state.books,
                    ...action.payload
                ]
            }
            break;
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(function (book) {
                return book.id === action.payload.id
            });

            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            }
            break;

        case 'UPDATE_BOOK':
            const currentBooks = [...state.books];
            const indexToUpdate = currentBooks.findIndex(book => book.id === action.payload.id);
            const updatedBook = {
                ...currentBooks[indexToUpdate],
                title: action.payload.title
            }

            // console.log('Updated Book', updatedBook);

            return {
                books: [
                    ...currentBooks.slice(0, indexToUpdate),
                    updatedBook,
                    ...currentBooks.slice(indexToUpdate + 1)
                ]
            }
            break;
    }
    return state;
}

// STEP 1: create the store
const store = createStore(reducer);

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
        title: 'Learn React in 24h'
    }
});