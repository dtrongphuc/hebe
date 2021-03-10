import React from 'react';
import AuthHeader from './AuthHeader';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import './styles.scss';

export default function index() {
	return (
		<header className='header-fixed'>
			<AuthHeader />
			<Navbar />
			<MobileNav />
		</header>
	);
}
