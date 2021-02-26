import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/login.css';
import { Link } from 'react-router-dom';
import CYMS from "../../assets/CYMS.svg";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
    //   this.props.history.push('/tweets');
    // }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {email: this.state.email, password: this.state.password};
    this.props.login(user); 
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const guest = {email: 'guest@guest.com', password: 'password'};
    this.props.login(guest); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <p key={`error-${i}`}>
            {this.state.errors[error]}
          </p>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='log-in-form-container'>
        <div className='log-inner-container'>

        <h1><Link id='q' to={'/products'}>CYMS</Link></h1>
        
          <div className='log-in-form'>
            <h2>Log In</h2>
            <form onSubmit={this.handleSubmit}>
              
              <div >
                <input  
                  className='input'
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <div className='errors'> {this.state.errors["email"]}</div>
                
                <input className='input' type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <div className='errors'> {this.state.errors["password"]}</div>
              </div>
              <div className='errors'></div>
  
                  <div className='button-container'>
                    <input className='log-in-button' type="submit" value="Log In" />
                    <input className='demo-log-in-button' onClick={this.handleDemoSubmit} type="submit" value="Demo Log In" />
                  </div>
                  
              </form>

          <div className='register-Link-container'>
            <p className='text'> Don't have an account?</p>
              <nav>
                <Link className='link' to={'/signup'}>Signup</Link>
                {/* <span>|</span> */}
                <Link className='link home' to={'/'}>Home</Link>
              </nav>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);