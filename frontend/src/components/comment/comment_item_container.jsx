import { connect } from 'react-redux';
import CommentItem from './comment_item';

import {  deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    
    return {
       comment: ownProps.comment
    }
}

const mdp = dispatch => {
    return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(msp, mdp)(CommentItem);