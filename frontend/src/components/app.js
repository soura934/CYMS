import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import Splash from './splash/splash';
import ProductShowContainer from './product/product_show_container'
import MainPageContainer from './main/main_page_container';

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
        <Route exact path="/product/:id/:_id" component={ProductShowContainer} />
      </Switch>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;