import React from 'react';

export default function Modal() {
	return (
		<div className='sub-modal' id={showModal ? 'hidden' : ''}>
			<div className='modal'>
				<img
					src='/close-teal.svg'
					className='close-btn'
					id='sub'
					onClick={() => setShowModal(!showModal)}
				/>
				<div className='modal-container'>
					<img src='/email-teal.svg' className='mail-icon' />
					<p>Enter your email address to get new posts straight to your inbox!</p>
					<Mailchimp
						className='form'
						action='https://a20hek.us1.list-manage.com/subscribe/post?u=afeb5bcfa8b0259f5e87b6d27&amp;id=0dfa88c50a'
						fields={[
							{
								name: 'EMAIL',
								placeholder: 'Email',
								type: 'email',
								required: true,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}
