import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom"

import SearchBarContainer from '../search/search_bar_container';

import '../../stylesheets/splash-page.css';
import cart from '../../assets/cart.png';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout()
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar'>
                  <Link className='cart-link' to={'/cart'}>
                    <img src={cart} alt='cart'/>
                  </Link>
                <button id='logout' onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="auth">
                <Link to={'/signup'} className='signup'>Signup</Link>
                <>&nbsp;or&nbsp;</>
                <Link to={'/login'} className='login'>Login</Link>
            </div>
        );
      }
  }

  render() {
    
      return (
        // <div className='header-container'>
          <div className='header'>
              <Link to={'/'} className="brand-name" >CYMS</Link>
              <SearchBarContainer />
              { this.getLinks() }
          </div>
          
          // <div className='header-filler'></div>
          
        // </div>
      );
  }
}

export default MainPage;