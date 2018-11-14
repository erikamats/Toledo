import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import ScrollToTop from './ScrollToTop';
import NavigationBar from './components/NavigationBar';
import ErrorPage from './components/Pages/ErrorPage';
import Gradebook from './components/Pages/Gradebook';
import SignupPage from './components/Pages/SignupPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import reducers from './reducers';
import UsersList from './components/UsersList';


import './App.css';

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {

  
  
  render() {
    return (
      <div className="App">    
      <Provider store={store}>
        <Router>
        <ScrollToTop>
        <Route render={({ location }) => (
          <div>
            <NavigationBar/>
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={100}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path="/" component={Gradebook} />
                  <Route exact path="/users" component={UsersList} />
                  <Route exact path="/signup" component={SignupPage} />
                  <Route component={ErrorPage} />
                </Switch>
                  </CSSTransition>
                  </TransitionGroup>
          </div>
        )} />
        </ScrollToTop>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
