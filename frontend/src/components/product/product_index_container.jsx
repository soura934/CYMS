import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const msp = (state, ownProps) => {
    return { 
        products: Object.values(state.entities.boards)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    }
}

export default connect(msp, mdp)(BoardIndex);