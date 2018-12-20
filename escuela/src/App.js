import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import NavigationBar from './components/nav/NavigationBar';
import MessagesList from './components/flashMessages/MessagesList';
import LandingPage from './components/landingPage/LandingPage';
import ErrorPage from './components/error/ErrorPage';
import GradebookContainer from './components/gradebook/GradebookContainer';
import SignupPage from './components/signup/SignupPage';
import Register from './components/signup/Register';
import Login from './components/signup/Login';
import UsersList from './components/users/UsersList';
import Assignment from "./components/assignments/Assignment";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* <NavigationBar /> */}
          <MessagesList />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/assignment" component={Assignment} />
            <Route exact path="/gradebook" component={GradebookContainer} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={SignupPage} />
            <Route component={ErrorPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
