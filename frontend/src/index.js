import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { fetchProduct } from './util/product_api_util'
// import { fetchProducts } from './actions/product_actions'

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decoded }};

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if ( decoded.exp < currentTime ) {
      store.dispatch(logout());
      
    }
  } else {
    store = configureStore({});
  }

  window.axios = axios;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProduct = fetchProduct;
  

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});