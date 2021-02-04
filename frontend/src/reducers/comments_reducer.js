import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return nextState[action.comment.id] = action.comment;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;