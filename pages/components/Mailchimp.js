import React from 'react';
import PropTypes from 'prop-types';

class Mailchimp extends React.Component {
	state = {};

	handleSubmit(evt) {
		evt.preventDefault();
		const { fields, action } = this.props;
		const values = fields
			.map((field) => {
				return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
			})
			.join('&');
		const path = `${action}&${values}`;
		const url = path.replace('/post?', '/post-json?');
		const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
		const email = this.state['EMAIL'];
		!regex.test(email) ? this.setState({ status: 'empty' }) : this.sendData(url);
	}

	sendData(url) {
		this.setState({ status: 'sending' });
		jsonp(url, { param: 'c' }, (err, data) => {
			if (data.msg.includes('already subscribed')) {
				this.setState({ status: 'duplicate' });
			} else if (err) {
				this.setState({ status: 'error' });
			} else if (data.result !== 'success') {
				this.setState({ status: 'error' });
			} else {
				this.setState({ status: 'success' });
			}
		});
	}

	render() {
		const { fields, styles, className, buttonClassName } = this.props;
		const messages = {
			...Mailchimp.defaultProps.messages,
			...this.props.messages,
		};
		const { status } = this.state;
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className={className}>
				{fields.map((input) => (
					<input
						className='rmf-input'
						{...input}
						key={input.name}
						onChange={({ target }) => this.setState({ [input.name]: target.value })}
						defaultValue={this.state[input.name]}
					/>
				))}
				<button
					className='subemail'
					disabled={status === 'sending' || status === 'success'}
					type='submit'>
					{messages.button}
				</button>
				<br />
				<div className='msg-alert'>
					{status === 'loading' && <p style={styles.sendingMsg}>{messages.sending}</p>}
					{status === 'success' && <p style={styles.successMsg}>{messages.success}</p>}
					{status === 'duplicate' && (
						<p style={styles.duplicateMsg}>{messages.duplicate}</p>
					)}
					{status === 'empty' && <p style={styles.errorMsg}>{messages.empty}</p>}
					{status === 'error' && <p style={styles.errorMsg}>{messages.error}</p>}
				</div>
			</form>
		);
	}
}

Mailchimp.defaultProps = {
	messages: {
		sending: 'Wait...',
		success: 'Thank you for subscribing! :)',
		error: 'An unexpected internal error has occurred.',
		empty: 'You must write an e-mail.',
		duplicate: "You've already subscribed to this newsletter",
		button: 'Subscribe!',
	},
	buttonClassName: '',
	styles: {
		sendingMsg: {
			fontSize: '0.8em',
			color: '#0652DD',
		},
		successMsg: {
			fontSize: '0.8em',
			color: '#00FF0B',
		},
		duplicateMsg: {
			fontSize: '0.8em',
			color: '#FF0000',
		},
		errorMsg: {
			fontSize: '0.8em',
			color: '#FF0000',
		},
	},
};

Mailchimp.propTypes = {
	action: PropTypes.string,
	messages: PropTypes.object,
	fields: PropTypes.array,
	styles: PropTypes.object,
	className: PropTypes.string,
	buttonClassName: PropTypes.string,
};

export default Mailchimp;
