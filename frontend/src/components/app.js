import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './footer/footer';
import Splash from './splash/splash';


const App = () => (
  <div>
    <MainPageContainer />
    
    <Switch>
      <AuthRoute exact path="/" component={ Splash } />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    
    <Footer />
  </div>
);

export default App;