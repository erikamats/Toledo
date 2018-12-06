import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './App.css';

import NavigationBar from './components/nav/NavigationBar';
import MessagesList from './components/flashMessages/MessagesList';

import LandingPage from './components/landingPage/LandingPage';
import ErrorPage from './components/error/ErrorPage';
import Gradebook from './components/gradebook/Gradebook';
import SignupPage from './components/signup/SignupPage';
// import AddClassPage from './components/addClass/AddClassPage';
import UsersList from './components/users/UsersList';
import Assignment from "./components/assignments/Assignment";
import Footer from "./components/footer/Footer";

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavigationBar />
            <MessagesList />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/assignment" component={Assignment} />
              <Route exact path="/gradebook" component={Gradebook} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/dashboard" component={SignupPage} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
