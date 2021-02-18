import { connect } from 'react-redux';
import SearchItem from './search_item';
import { fetchSearchProducts } from '../../actions/product_actions';
import { withRouter }from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {
    return{
    products: state.entities.products.data
}
}
const mapDisptachToProps = dispatch => {
    return {
        fetchSearchProducts: (products) => dispatch(fetchSearchProducts(products))
    }
};

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(SearchItem));