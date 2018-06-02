'use strict'

import axios from 'axios';


// GET A BOOK
export function getBooks() {
    // return { type: 'GET_BOOK' }

    // Get books from axios
    return function (dispatch) {
        axios.get('/api/books')
            .then(function (res) {
                dispatch({ type: 'GET_BOOK', payload: res.data });
            })
            .catch(function (err) {
                dispatch({ type: 'GET_BOOK_REJECTED', payload: 'there are an error while getting bookslist.' });
            })
    }
}

// POST A BOOK
export function postBooks(book) {
    // return {type: 'POST_BOOK', payload: book}
    return function (dispatch) {
        axios.post('/api/books', book)
            .then(function (res) {
                // Return res.data (after success) to the state by dispatch function
                dispatch({ type: 'POST_BOOK', payload: res.data })
            })
            .catch(function (err) {
                dispatch({ type: 'POST_BOOK_REJECTED', payload: "there was an error while posting a new book" }); Î
            })
    }
}


// UPDATE A BOOK
export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}

// DELETE A BOOK
export function deleteBooks(id) {
    return function (dispatch) {
        axios.delete("/api/books/" + id)
            .then(function (res) {
                dispatch({ type: 'DELETE_BOOK', payload: id })
            })
            .catch(function (err) {
                dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err })
            })
    }
    // return {
    //     type: 'DELETE_BOOK',
    //     payload: id
    // }
}


// RESET BUTTON
export function resetButton() {
    return {
        type: 'RESET_BUTTON'
    }
}