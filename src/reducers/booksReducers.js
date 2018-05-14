'use strict'

// STEP 3: BOOKS REDUCER

export function bookReducers(state = {
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
