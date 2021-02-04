import{ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart_actions';

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case ADD_TO_CART:
            return action.products;
            case REMOVE_FROM_CART:
                delete nextState[action.product.id]
                return nextState;
           
    
        default:
           return state
    }
}


export default cartReducer;