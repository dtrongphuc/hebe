import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileBars({ isOpen }) {
	return (
		<div className={`mobile-nav ${isOpen && 'open'}`}>
			<ul className='mobile-nav__list'>
				<li>
					<Link to='/'>shop</Link>
				</li>
				<li>
					<Link to='/collections/my-boyfriends-back'>
						my boyfriends back
					</Link>
				</li>
				<li>
					<Link to='/collections/staff-edit'>staff edit</Link>
				</li>
				<li>
					<Link to='/contact'>contact</Link>
				</li>
			</ul>
		</div>
	);
}
