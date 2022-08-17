import { applyMiddleware, createStore } from 'redux';
import { ADD_TO_CART, CART_DECREASE_QUANTITY, CART_INCREASE_QUANTITY } from './addToCart/actionTypes';
import rootReducer from './rootReducer';

const quantityHandler = (store) => (next) => (action) => {
    // get state
    const state = store.getState();
    const productsItems = state.products;

    const updatedState = [...productsItems];

    updatedState.map((item) => {
        if(action.payload.name === item.name) {
            if ((action.type === ADD_TO_CART || action.type === CART_INCREASE_QUANTITY)) {
                item.quantity = item.quantity - 1;
            } else if (action.type === CART_DECREASE_QUANTITY) {
                item.quantity = item.quantity + 1;
            }
        }
    });

    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(quantityHandler));

export default store;
