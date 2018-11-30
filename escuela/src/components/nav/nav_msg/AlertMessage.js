import React, { Component } from 'react';
import classnames from 'classnames';

class AlertMessage extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.deleteMessage(this.props.message.id);
	}

	render() {
		const { type, text } = this.props.message;

		return (
			<div
				className={classnames('alert', {
					'alert-success': type === 'success',
					'alert-danger': type === 'error',
				})}
			>
				<button onClick={this.handleClick} className="close">
					<span>&times;</span>
				</button>
				{text}
			</div>
		);
	}
}

export default AlertMessage;
