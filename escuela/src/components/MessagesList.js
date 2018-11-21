import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertMessage from './AlertMessage';
import { deleteMessage } from '../actions';

class MessagesList extends Component {
	render() {
		const messages = this.props.messages.map(message => (
			<AlertMessage key={message.id} message={message} deleteMessage={this.props.deleteMessage} />
		));
		return <div>{messages}</div>;
	}
}

function mapStateToProps(state) {
	return {
		messages: state.message,
	};
}

export default connect(
	mapStateToProps,
	{ deleteMessage }
)(MessagesList);
