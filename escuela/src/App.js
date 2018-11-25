import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import NavigationBar from './components/nav_msg/NavigationBar';
import ErrorPage from './components/pages/error/ErrorPage';
import Gradebook from './components/pages/gradebook/Gradebook';
import SignupPage from './components/pages/signup/SignupPage';
import AddClassPage from './components/pages/addClass/AddClassPage';
import UsersList from './components/pages/users/UsersList';
import MessagesList from './components/nav_msg/MessagesList';

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
              <Route exact path="/" component={Gradebook} />
              <Route exact path="/users" component={UsersList} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/addclass" component={AddClassPage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
