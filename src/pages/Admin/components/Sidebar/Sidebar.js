import React from 'react';
import SidebarList from './SidebarList';
import SidebarLogo from './SidebarLogo';
import './styles.scss';

export default function Sidebar() {
	return (
		<div className='admin-sidebar'>
			<div className='admin-sidebar__wrapper'>
				<SidebarLogo title='HEBE' />
				<SidebarList />
				<div className='admin-sidebar__overlay'></div>
			</div>
		</div>
	);
}
