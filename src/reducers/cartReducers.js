'use strict';

// CART REDUCERS
export function cartReducers(state = {
    cart: []
}, action) {
    // console.log('Going to cart reducer...');    
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            break;

        case 'ADD_TO_CART':
            let cart = [
                ...state.cart,
                ...action.payload,
            ];

            return {
                cart,
                totalAmount: totals(cart).amount,
                totalQty: totals(cart).qty
            }
            break;
        case 'DELETE_CART_ITEM':
            return {
                cart: [
                    ...action.payload
                ],
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            break;

        case 'UPDATE_CART':
            return {
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            break;
    }
    return state;
}

export function totals(payloadArr = []) {

    const totalAmount = payloadArr
        .map(item => item.price * item.quantity)
        .reduce((total, newValue) => total + newValue, 0);

    const totalQty = payloadArr
        .map(item => item.quantity)
        .reduce((count, b) => count + b, 0);

    return {
        amount: totalAmount,
        qty: totalQty
    }
}