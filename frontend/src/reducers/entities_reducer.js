import { combineReducers } from 'redux';
import productsReducer from './products_reducer'
import commentsReducer from './comments_reducer'
import cartsReducer from './carts_reducer';

const entitiesReducer = combineReducers({
    
    products: productsReducer,
    comments: commentsReducer,
    cart: cartsReducer
    
});

export default entitiesReducer;