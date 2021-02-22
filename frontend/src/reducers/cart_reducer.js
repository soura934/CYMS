import { RECEIVE_CART_ITEMS,
    CREATE_CART_ITEM } from '../actions/cart_actions';

const cartReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.items;
        case CREATE_CART_ITEM:
            const nextState = Object.assign([], state.cart, { [action.item.data]: action.item.data });
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;