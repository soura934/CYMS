import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
         case RECEIVE_ALL_COMMENTS:
             debugger
            return action.comments;
            
        case RECEIVE_COMMENT:
            debugger
            return nextState[action.comment.id] = action.comment;
        case REMOVE_COMMENT:
            
            delete nextState[action.commentId];
            debugger
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;