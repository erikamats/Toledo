import React, { Component } from 'react';
import TextFieldGroup from '../components/common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';

function validateInput(data) {
	let errors = {};

	if (Validator.isEmpty(data.fullName)) {
		errors.fullName = 'We need your full name';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'You must provide your email';
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = 'The email you provided is not a valid email';
	}
	if (Validator.isEmpty(data.username)) {
		errors.username = 'We need a username for your account';
	}
	if (Validator.isEmpty(data.passwordConfirmation)) {
		errors.passwordConfirmation = 'You must provide a password';
	}

	if (!Validator.equals(data.password, data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Passwords did not match';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
}

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			email: '',
			username: '',
			password: '',
			passwordConfirmation: '',
			errors: {},
			isLoading: false,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(e.target.name);
		console.log(e.target.value);
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.postUser(this.state).then(
				() => {
					this.props.addFlashMessage({
						type: 'success',
						text: 'Your registration was successful. Welcome to Toledo!',
					});
					this.props.history.push('/');
				},
				({ data }) => this.setState({ errors: data.errors, isLoading: false })
			);
		}
	}

	render() {
		const { errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Register</h1>
				<TextFieldGroup
					error={errors.fullName}
					label="Full Name"
					onChange={this.onChange}
					value={this.state.fullName}
					field="fullName"
				/>

				<TextFieldGroup
					error={errors.email}
					label="Email"
					onChange={this.onChange}
					value={this.state.email}
					field="email"
					type="email"
				/>

				<TextFieldGroup
					error={errors.username}
					label="Username"
					onChange={this.onChange}
					value={this.state.username}
					field="username"
				/>

				<TextFieldGroup
					error={errors.password}
					label="Password"
					onChange={this.onChange}
					value={this.state.password}
					field="password"
					type="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Confirm Password"
					onChange={this.onChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"
					type="password"
				/>

				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

export default withRouter(SignupForm);
