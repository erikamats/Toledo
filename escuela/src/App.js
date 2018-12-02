import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './App.css';

import NavigationBar from './components/nav/NavigationBar';
import LandingPage from './components/pages/landingPage/LandingPage';
import ErrorPage from './components/pages/error/ErrorPage';
import Gradebook from './components/pages/gradebook/Gradebook';
import SignupPage from './components/pages/signup/SignupPage';
import AddCoursePage from './components/pages/courses/AddCoursePage';
import ClassList from './components/pages/users/ClassList';
import Courses from './components/pages/courses/Courses';
import MessagesList from './components/nav/nav_msg/MessagesList';

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
              <Route exact path="/users" component={ClassList} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:_id" component={Courses} />
              <Route exact path="/addCourses" component={AddCoursePage} />
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
