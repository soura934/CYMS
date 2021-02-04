import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    return { 
        // productId: ownProps.match,
        comments: state.entities.comments
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchComment: () => dispatch(fetchComment())
    }
}

export default connect(msp, mdp)(Comment);