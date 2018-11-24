import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import NavigationBar from './components/NavigationBar';
import ErrorPage from './components/Pages/ErrorPage';
import Gradebook from './components/Pages/Gradebook';
import SignupPage from './components/Pages/SignupPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import reducers from './reducers';
import UsersList from './components/UsersList';
import MessagesList from './components/MessagesList';

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
      <div className="App">
        <Provider store={store}>
          <Router>
            <Route
              render={({ location }) => (
                <>
                  <NavigationBar />
                  <MessagesList />
                  <TransitionGroup>
                    <CSSTransition key={location.key} timeout={100} classNames="fade">
                      <Switch location={location}>
                        <Route exact path="/" component={Gradebook} />
                        <Route exact path="/users" component={UsersList} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route component={ErrorPage} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </>
              )}
            />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
