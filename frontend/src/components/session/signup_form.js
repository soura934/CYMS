import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.signedIn === true) {
    //   debugger
    //   this.props.history.push('/');
    // }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    
    e.preventDefault();
    let user = {email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        confirm: this.state.confirm};
    this.props.signup(user); 
    this.props.login({email:this.state.email, password:this.state.password }); 
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='signup-form-container'>
        <h1>CYMS</h1>
        <div className='signup-form'>
        <h2> Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='input'>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
            <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="FirstName"
              />
            <br/>
            <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="LastName"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="password"
                value={this.state.confirm}
                onChange={this.update('confirm')}
                placeholder="Confirm Password"
              />
            <br/>
            </div>
            <input className='signup-button' type="submit" value="Create your CYMS account" />
            
            {this.renderErrors()}
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);