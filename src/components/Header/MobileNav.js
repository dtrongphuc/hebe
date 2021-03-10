import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.webp';
import MobileBars from './MobileBars';

export default function MobileNav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleOpenNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div className='main__header mobile-header'>
			<Container fluid='lg'>
				<nav className='mobile-header__navbar'>
					<Link to='/cart' className='mobile-cart-icon'></Link>
					<Link to='/'>
						<img
							src={logo}
							alt='Hebe Designer Boutique'
							className='header-logo'
						/>
					</Link>
					<div
						className='mobile-bars-icon'
						onClick={handleOpenNav}
					></div>
					<MobileBars isOpen={isNavOpen} />
				</nav>
			</Container>
		</div>
	);
}
