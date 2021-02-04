import { combineReducers } from 'redux';

import productsReducer from './products_reducer'
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
    products: productsReducer,
    comments: commentsReducer
});

export default entitiesReducer;