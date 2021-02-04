import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import Splash from './splash/splash';
// newbranch
import ProductShowContainer from './product/product_show_container'
import ShoppingCartContainer from './cart/cart_container';
//
import MainPageContainer from './main/main_page_container';
import ProductShowContainer from './product/product_show_container'
// main


const App = () => (
  <div className='full-page-container'>
    <header>
      <MainPageContainer /> 
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={ Splash } />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/product/:id/:_id" component={ProductShowContainer} />
      </Switch>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;