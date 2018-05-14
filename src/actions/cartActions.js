'use strict'

// ADD TO CART
export function addToCard(book) {
    return {
        type: 'ADD_TO_CART',
        payload:book
    }
}