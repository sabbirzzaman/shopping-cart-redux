import { ADD_TO_CART, CART_INCREASE_QUANTITY, CART_DECREASE_QUANTITY } from './actionTypes';

const initialState = [];

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return [
                ...state,
                {
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                },
            ];
        }
        case CART_INCREASE_QUANTITY: {
            const updatedState = [...state];
            updatedState.map((item) => {
                if (item.name === action.payload.name) {
                    item.quantity = item.quantity + action.payload.quantity;
                }
            });
            return updatedState;
        }
        case CART_DECREASE_QUANTITY: {
            const updatedState = [...state];
            updatedState.map((item) => {
                if (item.name === action.payload.name) {
                    item.quantity = item.quantity - action.payload.quantity;
                }
            });
            return updatedState;
        }
        default:
            return state;
    }
};

export default addToCartReducer;
