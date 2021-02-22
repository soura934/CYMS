import { connect } from 'react-redux';

import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        product: state.entities.products.data,
        userId: state.session.user.id

    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(msp, mdp)(ProductShow);