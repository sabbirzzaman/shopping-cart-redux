import { DECREASE_QUANTITY, INCREASE_QUANTITY } from './actionTypes';

export const increaseQuantity = (name, quantity) => {
    return {
        type: INCREASE_QUANTITY,
        payload: {
            name,
            quantity,
        },
    };
};

export const decreaseQuantity = (name, quantity) => {
    return {
        type: DECREASE_QUANTITY,
        payload: {
            name,
            quantity,
        },
    };
};
