import { connect } from 'react-redux';
import CommentItem from './comment_item';

import { fetchProductComments, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    return {
       comment: ownProps.comment,
       user: state.session.user,
       productId: ownProps.comment.product
    }
}

const mdp = dispatch => {
    return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    fetchProductComments: (productId) => dispatch(fetchProductComments(productId))
    }
}

export default connect(msp, mdp)(CommentItem);