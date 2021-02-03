import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchSearchProducts } from '../../actions/product_actions';

const mapDisptachToProps = dispatch => {
    return {
        fetchSearchProducts: (products) => dispatch(fetchSearchProducts(products))
    }
};

export default connect(null, mapDisptachToProps)(SearchBar);