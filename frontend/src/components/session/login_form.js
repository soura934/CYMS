import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/login.css';
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

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.currentUser === true) {
//       this.props.history.push('/tweets');
//     }

//     this.setState({errors: nextProps.errors})
//   }

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
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='sign-in-div'>
      <div className='Sign-in-Container'>
        <div className='Sign-in-text-container'>
        <h1 className='Sign-in-header'> Sign In</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br/>
            <div className='input-section'>
              <p className='email-text'> Email</p>
              <input className='input' type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input className='input' type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              </div>
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        <button onClick={this.handleDemoSubmit}>Domo Login</button>

      </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);