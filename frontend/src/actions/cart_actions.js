import axios from 'axios';
import * as APIUtil from '../util/cart_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";

export const receiveCartItem = items => ({
    type: RECEIVE_CART_ITEMS,
    items: items
})

export const createCartItem = items => ({
    type: CREATE_CART_ITEM,
    items: items
})

export const fetchUsersProducts = userId => dispatch => {
    return APIUtil.fetchUsersProducts(userId)
        .then((items) => {
            return (dispatch(receiveCartItem(items)))
        })
}

export const createUserCart = (item) => dispatch => {
    return APIUtil.createCartItem(item)
        .then((item) => {
            return (dispatch(createCartItem(item)))
        })
}