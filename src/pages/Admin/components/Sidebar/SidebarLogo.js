import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/reactlogo.png';

export default function SidebarLogo({ title }) {
	return (
		<div className='sidebar-logo'>
			<Link to='/admin'>
				<img src={logo} alt='logo' />
				<h3>{title}</h3>
			</Link>
		</div>
	);
}
