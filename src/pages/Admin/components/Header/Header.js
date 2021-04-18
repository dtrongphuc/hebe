import React from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './styles.scss';
function Header({ setSidebarOpen }) {
	return (
		<header className='admin-header admin-container'>
			<Link to='#' onClick={setSidebarOpen} className='btn-bars'>
				<FontAwesomeIcon icon={faBars} size='lg' color='#000' />
			</Link>
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

Header.propTypes = {
	sidebarOpen: PropTypes.bool,
};

export default Header;
