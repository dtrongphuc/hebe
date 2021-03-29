import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header() {
	return (
		<header className='admin-header admin-container'>
			<h2 className='admin-header__heading'>Tale List</h2>
			<ul className='admin-header__nav'>
				<li className='admin-header__nav__item'>
					<Link to='#'>Account</Link>
				</li>
				<li className='admin-header__nav__item'>
					<Link to='/'>Shop</Link>
				</li>
				<li className='admin-header__nav__item'>
					<Link to='/logout'>Log out</Link>
				</li>
			</ul>
		</header>
	);
}
