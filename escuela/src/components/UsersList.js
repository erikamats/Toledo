import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user=>{
            return <li key={user.id}>{user.fullName}</li>
        })
    }

    // render(){
    //     return (
    //         const UsersList = () => {
    //             return (
    //                 <Users

    //                 />
    //             )
    //         }
    //     )
    // }
}

function mapStateToProps(state) {
    return { users: state.users}
}

export default connect(mapStateToProps, {fetchUsers})(UsersList)