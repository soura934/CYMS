import { connect } from 'react-redux';
import Comment from './comment';
import { fetchProductComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions';
import { withRouter } from "react-router";
const msp = (state, ownProps) => {
    debugger
    return { 
        product: state.entities.products.data,
        comments: state.entities.comments.data,
        loggedIn: state.session.isAuthenticated,
        productId: ownProps.match.params._id
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

export default withRouter(connect(msp, mdp)(Comment));