import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return this.props.users.map(user => {
      return <li key={user._id}>{user.firstName}</li>
    })
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
