import { connect } from 'react-redux';
import CommentItem from './comment_item';

import { fetchProductComments, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    debugger
    return {
       comment: ownProps.comment,
       user: state.session.user,
       productId: ownProps.comment.product
    //    state.entities.products.data._id
    }
}

const mdp = dispatch => {
    return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchProductComments: (productId) => dispatch(fetchProductComments(productId))
    }
}

export default connect(msp, mdp)(CommentItem);