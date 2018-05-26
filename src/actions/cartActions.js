'use strict'
import axios from 'axios';


export function getCart() {
    return function (dispatch) {
        axios.get('/api/cart')
            .then(function (res) {
                dispatch({ type: 'GET_CART', payload: res.data })
            })
            .catch(function (err) {
                dispatch({ type: 'GET_CART_REJECTED', msg: 'error when getting the cart from session: ' + err })
            })
    }
}

// ADD TO CART
export function addToCart(cart) {
    // console.log("Creating the action: ADD_TO_CART")
    // return {
    //     type: 'ADD_TO_CART',
    //     payload: cart
    // }

    return function (dispatch) {
        // Post to api server, waiting for getting res.data
        // When got the data. Put it to the dispatch function (return function)
        axios.post('/api/cart', cart)
            .then(function (res) {
                dispatch({ type: 'ADD_TO_CART', payload: res.data });
            })
            .catch(function (err) {
                dispatch({ type: 'ADD_TO_CART_REJECTED', msg: 'error when adding to the cart: ' + err })
            })
    }
}

// DELETE CART ITEM
export function deleteCartItem(cart) {
    // console.log("Creating the action: ADD_TO_CART")

    return function (dispatch) {
        axios.post('/api/cart', cart)
            .then(function (res) {
                dispatch({ type: 'DELETE_CART', payload: res.data });
            })
            .catch(function (err) {
                dispatch({ type: 'DELETE_CART_REJECTED', msg: 'error when deleting an item from the cart: ' + err })
            })
    }


    // return {
    //     type: 'DELETE_CART_ITEM',
    //     payload: cart
    // }
}

// UPDATE CART 
export function updateCart(_id, unit, cart) {

    const currentCartToUpdate = cart;
    const indexToUpdate = currentCartToUpdate.findIndex(book => book._id === _id);
    const newBookToUpdate = {
        ...currentCartToUpdate[indexToUpdate],
        quantity: currentCartToUpdate[indexToUpdate].quantity + unit
    }

    let cartUpdate = [
        ...currentCartToUpdate.slice(0, indexToUpdate),
        newBookToUpdate,
        ...currentCartToUpdate.slice(indexToUpdate + 1)
    ];

    return function (dispatch) {
        axios.post('/api/cart', cartUpdate)
            .then(function (res) {
                dispatch({ type: 'UPDATE_CART', payload: res.data });
            })
            .catch(function (err) {
                dispatch({ type: 'UPDATE_CART_REJECTED', msg: 'error when adding to the cart: ' + err })
            })
    }

    // return {
    //     type: 'UPDATE_CART',
    //     payload: cartUpdate
    // }
}