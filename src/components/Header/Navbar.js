import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
						<li>
							<Link to='/'>shop</Link>
						</li>
						<li>
							<Link to='/'>my boyfriends back</Link>
						</li>
						<li>
							<Link to='/'>staff edit</Link>
						</li>
						<li>
							<Link to='/contact'>contact</Link>
						</li>
						<li>
							<Link to='/cart'>cart</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	);
}
