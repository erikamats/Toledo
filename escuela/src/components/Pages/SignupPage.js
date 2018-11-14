import React, { Component } from "react";
import SignupForm from '../SignupForm';
import {connect} from 'react-redux';
import {  postUser } from '../../actions';

class SignupPage extends Component {

    render () {
        const {postUser} = this.props
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm postUser={postUser}/>
                </div>
            </div>
            )
    }
}

function mapStateToProps(state) {
    return { users: state.users}
}

export default connect(mapStateToProps, {postUser})(SignupPage)