import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchProducts, fetchProducts } from '../../actions/product_actions';
import { withRouter }from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {
    return{
    products: state.entities.products.data
}
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSearchProducts: (products) => dispatch(fetchSearchProducts(products)),
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));