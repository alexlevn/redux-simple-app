'use strict'
import { combineReducers } from "redux";

// HERE IMPORT REDUCERS TO BE COMBINED
import {bookReducers} from './booksReducers'
import {cardReducers} from './cardReducers'

// HERE COMBINE THE REDUCERS
export default combineReducers({
    books: bookReducers,
    cart: cardReducers
});