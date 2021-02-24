import { connect } from 'react-redux';
import Landing from './landing';

const mSTP = (state, ownProps) => {
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
       
    };
};

export default connect(mSTP, mDTP)(Landing);