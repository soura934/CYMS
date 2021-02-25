import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchOneCartItem } from "../../actions/product_actions";

const msp = (state, ownProps) => {
    
    return {
        productId: ownProps.productId,
        product: state.entities.products[ownProps.productId]
    }
}

const mdp = dispatch => {
    return {
        fetchOneCartItem: cartItem => dispatch(fetchOneCartItem(cartItem))
    }
}

export default connect(msp, mdp)(CartItem);