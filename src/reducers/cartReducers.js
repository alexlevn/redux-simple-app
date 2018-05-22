'use strict';

// CART REDUCERS
export function cartReducers(state = {
    carts: []
}, action) {
    // console.log('Going to cart reducer...');    
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                carts: [
                    ...state.carts,
                    action.payload
                ]
            }
            break;
        case 'DELETE_CART_ITEM':
            // console.log('Deleting..');
            // console.log("Carts after delete:", action.payload)
            // Why do not execute the delete process in this func?
            return {
                carts: [
                    // ...state.carts,
                    ...action.payload
                ]
            }
            break;
    }
    return state;
}