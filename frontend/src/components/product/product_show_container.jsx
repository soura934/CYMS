import { connect } from 'react-redux';

import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { createCart } from "../../actions/cart_actions"

const msp = (state, ownProps) => {
    debugger
    return {
        product: state.entities.products.data,
        user: state.session.user,
        session: state.session
       
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        createCart: cart => dispatch(createCart(cart))
    }
}

export default connect(msp, mdp)(ProductShow);