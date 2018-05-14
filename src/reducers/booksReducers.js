'use strict'

// STEP 3: BOOKS REDUCER

export function bookReducers(state = {
    books: [
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
    ]
}, action) {
    switch (action.type) {

        case "POST_BOOK":
            return {
                ...state,
                books: [...state.books]
            };
            break;
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
