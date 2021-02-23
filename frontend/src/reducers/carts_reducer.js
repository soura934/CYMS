import{ADD_CART, RECEIVE_CART, REMOVE_FROM_CART} from '../actions/cart_actions';
 
const cartReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state.entities.cart);
    switch (action.type) {
        case ADD_CART:
            debugger
            nextState.push([action.cart.data]);
           return nextState;

        case RECEIVE_CART:
            debugger
            return action.products  

        case REMOVE_FROM_CART:
               debugger
                delete nextState[action.product]
                return nextState;

         default:
           return state
    }
}
 
 
export default cartReducer;