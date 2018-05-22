'use strict'

// ADD TO CART
export function addToCart(book) {
    // console.log("Creating the action: ADD_TO_CART")
    return {
        type: 'ADD_TO_CART',
        payload:book
    }
}

// DELETE CART ITEM
export function deleteCartItem(cart) {
    // console.log("Creating the action: ADD_TO_CART")
    return {
        type: 'DELETE_CART_ITEM',
        payload:cart
    }
}