'use strict'
import { combineReducers } from "redux";

// HERE IMPORT REDUCERS TO BE COMBINED
import { bookReducers } from './booksReducers'
import { cartReducers } from './cartReducers'

// HERE COMBINE THE REDUCERS
export default combineReducers({
    books: bookReducers,
    carts: cartReducers
});
