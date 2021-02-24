import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const receiveComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
};

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

export const fetchComments = () => {
    return dispatch => {
        return CommentApiUtil.fetchComments().then(comments => {
            dispatch(receiveComments(comments))
        })
    }
}

export const fetchProductComments = (product_id) => {
    return dispatch => {
        return CommentApiUtil.fetchProductComments(product_id).then(comments => {
            dispatch(receiveComments(comments))
        })
    }
}
export const fetchComment = (commentId) => {
    return dispatch => {
        return CommentApiUtil.fetchComment(commentId).then(comment => {
            dispatch(receiveComment(comment))
        })
    }
}

// export const createComment = (comment) => dispatch => {
    
//      return CommentApiUtil.createComment(comment)
//      .then(comment => {
         
//          return dispatch(receiveComment(comment))})
// }
export const createComment = (comment) => dispatch => {
    
    return CommentApiUtil.createComment(comment)
    .then(() => {
        
        return dispatch(fetchComments())})
}

export const deleteComment = (commentId) => {
    debugger
    return dispatch => {
        return CommentApiUtil.deleteComment(commentId).then(() => {
            debugger
            return dispatch(removeComment(commentId))
        })
    }
}
