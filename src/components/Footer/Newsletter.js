import React from 'react';
import Title from './Title';

export default function Newsletter() {
	return (
		<div className='footer__item'>
			<Title>Newsletter</Title>
			<p className='footer__form-text'>Join our mailing list</p>
			<form action='' method='post' className='footer__form'>
				<input
					type='email'
					name='newsletter-email'
					placeholder='your@email.com'
				/>
				<button type='submit'>Subscribe</button>
			</form>
		</div>
	);
}
