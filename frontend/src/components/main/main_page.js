import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/splash-page.css';
import SearchBarContainer from '../search/search_bar_container';


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
            <div className='nav-bar'>
                <Link className='profile-ink' to={'/profile'}>Profile</Link>
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
        <div className='header-container'>
          <div className='header'>
              <Link to={'/'} className="brand-name" >CYMS</Link>
              <SearchBarContainer />
              { this.getLinks() }
          </div>
          <p>0</p>
        </div>
      );
  }
}

export default MainPage;