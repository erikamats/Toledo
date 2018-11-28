import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './App.css';

<<<<<<< HEAD
import NavigationBar from './components/nav_msg/NavigationBar';
import ErrorPage from './components/Pages/error/ErrorPage';
import Gradebook from './components/Pages/gradebook/Gradebook';
import SignupPage from './components/Pages/signup/SignupPage';
import AddClassPage from './components/Pages/addClass/AddClassPage';
import UsersList from './components/Pages/users/UsersList';
import MessagesList from './components/nav_msg/MessagesList';
=======
import NavigationBar from './components/nav/NavigationBar';
import LandingPage from './components/Pages/landingPage/LandingPage';
import ErrorPage from './components/Pages/error/ErrorPage';
import Gradebook from './components/Pages/gradebook/Gradebook';
import SignupPage from './components/Pages/signup/SignupPage';
import AddClassPage from './components/nav/nav_msg/AlertMessage';
import UsersList from './components/Pages/users/UsersList';
import MessagesList from './components/nav/nav_msg/MessagesList';
>>>>>>> 2034892f108d3768730427433bd8b0a3488b7b8e

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <NavigationBar />
            <MessagesList />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/gradebook" component={Gradebook} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/dashboard" component={SignupPage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
