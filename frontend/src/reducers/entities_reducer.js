import { combineReducers } from 'redux';

import productsReducer from './products_reducer'

const entitiesReducer = combineReducers({
    products: productsReducer
});

export default entitiesReducer;