'use strict'

// STEP 3: BOOKS REDUCER

export function bookReducers(state = {
    books: []
}, action) {
    switch (action.type) {

        case "GET_BOOK":
            // console.log('Getting books...');
            return {
                ...state,
                books: [...action.payload]
            };
            break;
        case "POST_BOOK":
            // let books = state.books.concat(action.payload); return {books};
            // console.log('Posting a book');
            return {
                ...state,
                books: [
                    ...state.books,
                    ...action.payload
                ],
                msg: 'Saved! Click to continue',
                style: 'success'
            }
            break;
        case "POST_BOOK_REJECTED":
            return {
                ...state,
                msg: 'Please, try a gain',
                style: 'danger'
            };

            break;
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(function (book) {
                return book._id == action.payload
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
            const indexToUpdate = currentBooks.findIndex(book => book._id === action.payload._id);
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
        case 'RESET_BUTTON':
            return {
                ...state,
                msg: null,
                style: 'primary'
            }
            break;
    }
    return state;
}
