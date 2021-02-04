import { connect } from 'react-redux';
import ShoppingCart from './cart';
import { fetchCart } from '../../actions/cart_actions';
import {ProductShowPage} from '../product/product_show';
const msp = (state, ownProps) => {
    return { 
        CartItems: state.entities.products.data,
        user:  state.session.user
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchCart: () => dispatch(fetchCart())
    }
}

export default connect(msp, mdp)(ShoppingCart);