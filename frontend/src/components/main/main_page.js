import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/splash-page.css'


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="authentication">
                <Link to={'/login'}>Login</Link>
                <>or</>
                <Link to={'/signup'}>Signup</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='header'>
            <Link to={'/'} className="brand-name" >CYMS</Link>
            { this.getLinks() }
        </div>
      );
  }
}

export default MainPage;