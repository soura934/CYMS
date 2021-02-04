import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
};

export const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
};

export const fetchComment = (commentId) => {
    return dispatch => {
        return CommentApiUtil.fetchComment(commentId).then(comment => {
            dispatch(receiveComment(comment))
        })
    }
}

export const createComment = (comment) => {
    return dispatch => {
        return CommentApiUtil.createComment(comment).then(comment => {
            dispatch(receiveComment(comment))
        })
    }
}

export const deleteComment = (commentId) => {
    return dispatch => {
        return CommentApiUtil.deleteComment(commentId).then(() => {
            dispatch(removeComment(commentId))
        })
    }
}
