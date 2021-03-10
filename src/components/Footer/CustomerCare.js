import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

export default function CustomerCare() {
	return (
		<ul className='footer__item footer__list'>
			<Title>Customer Care</Title>
			<li>
				<Link to='#' className='footer__item-link'>
					contact us
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					faqs
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					the story
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					store location
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					blog
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					careers
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					term of use
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					shipping
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					returns
				</Link>
			</li>
			<li>
				<Link to='#' className='footer__item-link'>
					privacy policy
				</Link>
			</li>
		</ul>
	);
}
