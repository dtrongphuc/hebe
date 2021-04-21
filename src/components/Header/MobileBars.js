import React from 'react';
import { Link } from 'react-router-dom';
import getNavbarLinks from './Links';

export default function MobileBars({ isOpen }) {
	return (
		<div className={`mobile-nav ${isOpen && 'open'}`}>
			<ul className='mobile-nav__list'>
				{getNavbarLinks()
					.filter((link) => link.showOn.includes('mobile'))
					.map((link) => (
						<li key={link.name}>
							<Link to={link.path}>{link.name}</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
