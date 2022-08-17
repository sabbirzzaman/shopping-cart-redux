import { ADD_TO_CART, CART_DECREASE_QUANTITY, CART_INCREASE_QUANTITY } from './actionTypes';

export const addToCart = (name, price, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            name,
            price,
            quantity,
        },
    };
};

export const increaseQuantity = (name, quantity) => {
    return {
        type: CART_INCREASE_QUANTITY,
        payload: {
            name,
            quantity,
        },
    };
};


export const decreaseQuantity = (name, quantity) => {
    return {
        type: CART_DECREASE_QUANTITY,
        payload: {
            name,
            quantity,
        },
    };
};
