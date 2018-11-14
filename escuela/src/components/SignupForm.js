import React, { Component } from "react";
// import classnames from 'classnames';
import axios from 'axios';
import TextFieldGroup from '../components/common/TextFieldGroup';

class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstName:'',
            lastName:'',
            telephone:'',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.postUser(this.state);
    }

    render () {
        return(
            <form onSubmit = {this.onSubmit}>
                <h1>Register</h1>
                <TextFieldGroup
                label="First Name"
                onChange={this.onChange}
                value={this.state.username}
                field="first name"
                />

                <TextFieldGroup
                label="Last Name"
                onChange={this.onChange}
                value={this.state.email}
                field="last name"
                />

                <TextFieldGroup
                label="telephoe"
                onChange = {this.onChange}
                value={this.state.password}
                field="telephone"
                type="tel"
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
            )
    }
}

export default SignupForm;