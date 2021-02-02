import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const msp = (state, ownProps) => {
    return { 
        products: Object.values(state.entities.products)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(msp, mdp)(ProductIndex);