// import { debug } from "util";

'use strict';

// CART REDUCERS
export function cartReducers(state = {
    carts: []
}, action) {
    // console.log('Going to cart reducer...');    
    switch (action.type) {
        case 'ADD_TO_CART':
            let carts = [
                ...state.carts,
                action.payload,
            ];

            return {
                carts,
                totalAmount: totals(carts).amount,
                totalQty: totals(carts).qty
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
                ],
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }
            break;

        case 'UPDATE_CART':

            const currentCartsToUpdate = [...state.carts];
            const indexToUpdate = currentCartsToUpdate.findIndex(cart => cart._id === action._id);
            const newCartToUpdate = {
                ...currentCartsToUpdate[indexToUpdate],
                quantity: currentCartsToUpdate[indexToUpdate].quantity + action.unit
            }

            let cartsUpdate = [
                ...currentCartsToUpdate.slice(0, indexToUpdate),
                newCartToUpdate,
                ...currentCartsToUpdate.slice(indexToUpdate + 1)
            ];

            return {
                carts: cartsUpdate,
                totalAmount: totals(cartsUpdate).amount,
                totalQty: totals(cartsUpdate).qty
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