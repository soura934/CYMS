import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/signup.css';
import { Link } from 'react-router-dom'
import CYMS from "../../assets/CYMS.svg"
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

//   componentWillReceiveProps(nextProps) {
//     // if (nextProps.signedIn === true) {
//     //   
//     //   this.props.history.push('/');
//     // }
// 
//     // this.setState({errors: nextProps.errors})
//     
//   }

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
    // this.props.signup(user); 
   this.props.signup(user).then( (res) => { 
     if(res.type === "RECEIVE_SESSION_ERRORS"){ 
      this.setState({errors: res.errors})
     } else {
       
     this.props.login({email:this.state.email, password:this.state.password }) 
   }})
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
        <div className='inner-container'> 
        <h1> Create Account</h1>
        <div className='signup-form'>
          <form onSubmit={this.handleSubmit}>      
            <div className='input'>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              <br/>
                <div className='errors'> {this.state.errors["email"]}</div>

              <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  placeholder="First Name"
                />
              <br/>
                <div className='errors'> {this.state.errors["firstName"]}</div>

              <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                />
              <br/>
                <div className='errors'> {this.state.errors["lastName"]}</div>

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
                <div className='errors'> {this.state.errors["password"]}</div>
              <input type="password"
                  value={this.state.confirm}
                  onChange={this.update('confirm')}
                  placeholder="Confirm Password"
                />
              <br/>
                <div className='errors'> {this.state.errors["password"]}</div>
              </div>
              <input className='signup-button' type="submit" value="Create your CYMS account" />     
            </form>

          </div>

        {/* <div className='login-Link-container'>
          <p className='text'> Already have an account? </p>
          <nav>
          <Link className='link' to={'/login'}>Log In</Link>
          <span>|</span>
          <Link className='link home' to={'/'}>Home</Link>
          </nav>
        </div> */}

        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);