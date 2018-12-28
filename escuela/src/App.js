import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MessagesList from "./components/flashMessages/MessagesList";
import TeacherDashboard from "./components/teacherDashboard/TeacherDashboard";
import LandingPage from "./components/landingPage/LandingPage";
import ErrorPage from "./components/error/ErrorPage";
import SignupPage from "./components/signup/SignupPage";
import UsersList from "./components/users/UsersList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <MessagesList />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dashboard" component={TeacherDashboard} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
