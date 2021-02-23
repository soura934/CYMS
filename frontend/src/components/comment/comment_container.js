import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    // 
    return { 
        product: state.entities.products.data,
        comments: state.entities.comments.data
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        fetchComment: (productId) => dispatch(fetchComment(productId)),
        createComment: (product) => dispatch(createComment(product)),        
        deleteComment: (productId) => dispatch(deleteComment(productId))
    }
}

export default connect(msp, mdp)(Comment);