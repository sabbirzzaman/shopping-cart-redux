import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

const quantityHandler = (store) => (next) => (action) => {
    // get state
    const state = store.getState();
    const productsItems = state.products;

    const updatedState = [...productsItems];

    updatedState.map((item) => {
        if (action.payload.name === item.name) {
            item.quantity = item.quantity - 1;
        }
    });

    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(quantityHandler));

export default store;
