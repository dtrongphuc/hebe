import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AuthHeader() {
	return (
		<div className='auth-header__wrapper'>
			<Container>
				<ul className='auth-header'>
					<li>
						<Link to='/account/login'>LOG IN</Link>
					</li>
					<li>
						<Link to='/account/register'>CREATE ACCCOUNT</Link>
					</li>
				</ul>
			</Container>
		</div>
	);
}
