import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCcAmex,
	faCcMastercard,
	faCcPaypal,
	faCcVisa,
	faFacebookSquare,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

export default function Secondary() {
	return (
		<div className='footer-secondary'>
			<ul className='footer-payment'>
				<li>
					<FontAwesomeIcon icon={faCcAmex} />
				</li>
				<li>
					<FontAwesomeIcon icon={faCcMastercard} />
				</li>
				<li>
					<FontAwesomeIcon icon={faCcPaypal} />
				</li>
				<li>
					<FontAwesomeIcon icon={faCcVisa} />
				</li>
			</ul>
			<ul className='footer-social'>
				<li>
					<a href='https://facebook.com/'>
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
				</li>
				<li>
					<a href='https://www.instagram.com/'>
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
				</li>
			</ul>
			<ul className='footer-copyright'>
				<li>
					<a href='https://hebeboutique.com/'>
						© Copyright Hebe Designer Boutique 2021
					</a>
				</li>
			</ul>
		</div>
	);
}
