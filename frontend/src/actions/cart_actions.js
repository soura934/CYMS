import * as ProductApiUtil from '.././util/product_api_util';
import * as CartApiUtil from '.././util/product_api_util';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
};

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        product
    }
};

export const fetchCart = () => {
    return dispatch => {
        return CartApiUtil.fetchCart().then(product => {
            dispatch(addToCart(product))
        })
    }
}

export const removeProduct = (productId) => {
    return dispatch => {
        return CartApiUtil.removeProduct(productId).then(() => {
            dispatch(removeProduct(productId))
        })
    }
}