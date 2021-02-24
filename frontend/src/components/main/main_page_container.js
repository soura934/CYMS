import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router-dom"

import MainPage from './main_page';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default withRouter(connect(mapStateToProps, { logout } )(MainPage));