import{ADD_CART, RECEIVE_CART, REMOVE_FROM_CART} from '../actions/cart_actions';
 
const cartReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state.cart);
    switch (action.type) {
        case ADD_CART:
            let nextState = Object.assign([], state.cart);
           
            case REMOVE_FROM_CART:
                delete nextState[action.product.id]
                return nextState;
           
    
        default:
           return state
    }
}
 
 
export default cartReducer;