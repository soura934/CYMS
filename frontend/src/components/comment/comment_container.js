import { connect } from 'react-redux';
import Comment from './comment';
import { fetchProductComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    debugger
    return { 
        product: state.entities.products.data,
        comments: state.entities.comments.data,
        loggedIn: state.session.isAuthenticated
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchProductComments: (productId) => dispatch(fetchProductComments(productId)),
        fetchComment: (productId) => dispatch(fetchComment(productId)),
        createComment: (product) => dispatch(createComment(product)),        
        deleteComment: (productId) => dispatch(deleteComment(productId))
    }
}

export default connect(msp, mdp)(Comment);