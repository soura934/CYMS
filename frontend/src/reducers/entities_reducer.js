import { combineReducers } from 'redux';

<<<<<<< HEAD
import productsReducer from './products_reducer';
import commentsReducer from './comments_reducer';
import cartReducer from "./carts_reducer";
=======
import productsReducer from './products_reducer'
import commentsReducer from './comments_reducer'
import cartReducer from './cart_reducer';
>>>>>>> ce344dcc4295cd6d8fe685aa19010bbeb6ab68cd

const entitiesReducer = combineReducers({
    
    products: productsReducer,
    comments: commentsReducer,
<<<<<<< HEAD
    carts: cartReducer
    
=======
    cart: cartReducer
>>>>>>> ce344dcc4295cd6d8fe685aa19010bbeb6ab68cd
});

export default entitiesReducer;