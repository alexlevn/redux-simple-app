'use strict';

// CART REDUCERS
export function cardReducers(state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log('adding cart...');
            return {
                cart: [
                    ...state.cart,
                    ...action.payload
                ]
            }
            break;
    }
    return state;
}