import { connect } from 'react-redux';
import CommentItem from './comment_item';

import { editComment,fetchProductComments, deleteComment } from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    
    return {
       comment: ownProps.comment,
       user: state.session.user,
       productId: ownProps.comment.product,
       loggedIn: state.session.isAuthenticated
    //    state.entities.products.data._id
    }
}

const mdp = dispatch => {
    return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchProductComments: (productId) => dispatch(fetchProductComments(productId)),
    editComment: (comment) => dispatch(editComment(comment))
    }
}

export default connect(msp, mdp)(CommentItem);