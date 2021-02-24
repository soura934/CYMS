import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            debugger
            return nextState[action.product.id] = action.product;
        case REMOVE_PRODUCT:
            delete nextState[action.productId];
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;