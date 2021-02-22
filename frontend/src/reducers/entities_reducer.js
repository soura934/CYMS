import { combineReducers } from 'redux';

import productsReducer from './products_reducer';
import commentsReducer from './comments_reducer';
import cartReducer from "./carts_reducer";

const entitiesReducer = combineReducers({
    
    products: productsReducer,
    comments: commentsReducer,
    carts: cartReducer
    
});

export default entitiesReducer;