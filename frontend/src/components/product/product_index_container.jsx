import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const msp = (state, ownProps) => {
    // debugger
    return { 
        products: state.entities.products.data
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(msp, mdp)(ProductIndex);