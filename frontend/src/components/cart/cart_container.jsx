import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCartItems, removeProduct } from '../../actions/cart_actions'

const msp = (state, ownProps) => {
    return { 
        cart: state.entities.carts.data,
        user: state.session.user.id
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchCartItems: (user) => dispatch(fetchCartItems(user)),
        removeProduct: (product) => dispatch(removeProduct(product))
    }
}

export default connect(msp, mdp)(Cart);