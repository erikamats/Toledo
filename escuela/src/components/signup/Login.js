import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from 'actions';
import classnames from 'classnames';
import axios from 'axios';
class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.fetchUserProfileInfo = this.fetchUserProfileInfo.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  fetchUserProfileInfo(e) {
    e.preventDefault();
    axios.get('/me')
      .then(function (response) {
        console.log(response.data);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(user);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: '50px', width: '700px' }}>
        <button type="button" onClick={this.fetchUserProfileInfo} className="btn btn-primary">
          Fetch My Account Info And console.log It
        </button>
        <button type="button" onClick={this.handleLogout} className="btn btn-primary">
          Logout User
        </button>
        <h2 style={{ marginBottom: '40px' }}>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.email
              })}
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password
              })}
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login User
                    </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser, logoutUser })(Login)