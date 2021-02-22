import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCartItems, removeProduct } from '../../actions/cart_actions'

const msp = (state, ownProps) => {
    debugger
    return { 
        cart: state.entities.carts,
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