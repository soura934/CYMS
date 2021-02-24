import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchOneCartItem } from "../../actions/product_actions";

const msp = (state, ownProps) => {
    
    return {
        cartItem: ownProps.cartItem.cartItem,
        product: state.entities.products.data[ownProps.cartItem.cartItem]
    }
}

const mdp = dispatch => {
    return {
        fetchOneCartItem: cartItem => dispatch(fetchOneCartItem(cartItem))
    }
}

export default connect(msp, mdp)(CartItem);