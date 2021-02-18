import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts, fetchSearchProducts } from '../../actions/product_actions';

const msp = (state, ownProps) => {
    return { 
        products: state.entities.products.data
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchSearchProducts: (products) => dispatch(fetchSearchProducts(products))
    }
}

export default connect(msp, mdp)(ProductIndex);