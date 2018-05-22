'use strict';

// CART REDUCERS
export function cartReducers(state = {
    carts: []
}, action) {
    // console.log('Going to cart reducer...');    

    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log('adding cart...');
            return {
                carts: [
                    ...state.carts,
                    action.payload
                ]
            }
            break;
    }
    return state;
}