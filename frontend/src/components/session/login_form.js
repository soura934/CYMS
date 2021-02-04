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
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
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
              <br/>
                  {this.renderErrors()}
                  <button>Log In</button>
              <br/>
                  <button onClick={this.handleDemoSubmit}>Demo Log In</button>
              </form>
          </div>

        <div className='Register-Link-container'>
          <p className='register-link-text'> New to CYMS? </p>
          <Link className='register-link' to={'/signup'}> Create a new Account </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);