import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import ShoppingCartContainer from './cart/cart_container';


const App = () => (
  <div>
 
    
    <Switch>
      <Route exact path="/" component={ Splash } />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/ShoppingCart' component={ShoppingCartContainer} />
    </Switch>
    

  </div>
);

export default App;