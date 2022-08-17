import { combineReducers } from "redux";
import addToCartReducer from "./addToCart/addToCartReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
    addToCart: addToCartReducer,
    products: productsReducer,
})

export default rootReducer;