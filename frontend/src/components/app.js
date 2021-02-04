import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import ProductShowContainer from './product/product_show_container'
import ShoppingCartContainer from './cart/cart_container';


const App = () => (
  <div>
 
 <main>   
    <Switch>
      <Route exact path="/" component={ Splash } />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/ShoppingCart' component={ShoppingCartContainer} />
  <AuthRoute exact path="/product/:id/:_id" component={ProductShowContainer} />
    </Switch>
     </main>
  </div>
  );
export default App;