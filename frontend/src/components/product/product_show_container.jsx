import { connect } from 'react-redux';

import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const msp = (state, ownProps) => {
    return {
        product: state.entities.products.data
    }
}
const mdp = (dispatch, ownProps) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(msp, mdp)(ProductShow);