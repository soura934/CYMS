import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/login.css';
import { Link } from 'react-router-dom'
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
          <h1>CYMS</h1>
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
              {/* <br/> */}
              <div className='errors'>
                  {/* {this.renderErrors()} */}
              </div>
  
                  <div className='button-container'>
                    <input className='log-in-button' type="submit" value="Log In" />
                    <input onClick={this.handleDemoSubmit} className='demo-log-in-button' type="submit" value="Demo Log In" />
                  </div>
              </form>
          </div>

        <div className='register-Link-container'>
          <p className='text'> New to CYMS? </p>
            <nav>
              <Link className='link' to={'/signup'}>Sign Up</Link>
              <span>|</span>
              <Link className='link home' to={'/'}>Home</Link>
            </nav>
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);