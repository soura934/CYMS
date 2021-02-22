import * as CartApiUtil from '../util/cart_api_util';
export const ADD_CART = "ADD_CART"
export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addCart = cart => {
    return {
        type: ADD_CART,
        cart
    }
}

export const receiveCart = (products) => {
    return {
        type: RECEIVE_CART,
        products
    }
};
 
export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        product
    }
};
 
export const createCart = (cart) => dispatch => { 
        return CartApiUtil.createCart(cart)
        .then(cart => dispatch(addCart(cart)))
}

export const fetchCartItems = user => dispatch => {
    return CartApiUtil.fetchUserCart(user)
    .then(products => dispatch(receiveCart(products)))
}


export const removeProduct = (product) => dispatch => {
        return CartApiUtil.deleteCartItem(product)
        .then(() => dispatch(removeFromCart(product)))
 }

