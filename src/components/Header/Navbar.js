import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getNavbarLinks from './Links';
import logo from '../../assets/img/logo.webp';

export default function Navbar() {
	return (
		<div className='main__header desktop-header'>
			<Container fluid='lg'>
				<nav className='header__navbar'>
					<Link to='/'>
						<img
							src={logo}
							alt='Hebe Designer Boutique'
							className='header-logo'
						/>
					</Link>
					<ul>
						{getNavbarLinks()
							.filter((link) => link.showOn.includes('desktop'))
							.map((link) => (
								<li key={link.name}>
									<Link to={link.path}>{link.name}</Link>
								</li>
							))}
					</ul>
				</nav>
			</Container>
		</div>
	);
}
