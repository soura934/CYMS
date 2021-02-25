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
 
export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId
    }
};
 
export const createCart = (cart) => dispatch => { 
    
        return CartApiUtil.createCart(cart)
        .then(cart => {
            
           

             return dispatch(addCart(cart))})
}

export const fetchCartItems = user => dispatch => {
    
    return CartApiUtil.fetchUserCart(user)
    .then(products  =>  { 
     return dispatch(receiveCart(products))})
}


export const removeProduct = (productId) => dispatch => {
        return CartApiUtil.deleteCartItem(productId)
        .then(() => dispatch(removeFromCart(productId)))
 }

// =======
// import axios from 'axios';
// import * as APIUtil from '../util/cart_util';

// export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
// export const CREATE_CART_ITEM = "CREATE_CART_ITEM";

// export const receiveCartItem = items => ({
//     type: RECEIVE_CART_ITEMS,
//     items: items
// })

// export const createCartItem = items => ({
//     type: CREATE_CART_ITEM,
//     items: items
// })

// export const fetchUsersProducts = userId => dispatch => {
//     return APIUtil.fetchUsersProducts(userId)
//         .then((items) => {
//             return (dispatch(receiveCartItem(items)))
//         })
// }

// export const createUserCart = (item) => dispatch => {
//     return APIUtil.createCartItem(item)
//         .then((item) => {
//             return (dispatch(createCartItem(item)))
//         })
// }

