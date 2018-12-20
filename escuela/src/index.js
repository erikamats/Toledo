import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'

import jwt_decode from 'jwt-decode';
import { setAuthToken } from './reducers/utilityFunctions';
import { setCurrentUser, logoutUser } from './actions/authActions';

import * as serviceWorker from './serviceWorker';

const store = configureStore()
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}
renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();