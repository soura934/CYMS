import { combineReducers } from 'redux';

import productsReducer from './products_reducer'
import cartReducer from './cart_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default entitiesReducer;