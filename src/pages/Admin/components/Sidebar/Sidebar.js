import React from 'react';
import PropTypes from 'prop-types';
import SidebarList from './SidebarList';
import SidebarLogo from './SidebarLogo';
import CloseButton from './CloseButton';

import './styles.scss';

function Sidebar({ open, setOpen }) {
	return (
		<div className={`admin-sidebar ${open ? 'open' : ''}`}>
			<div className='admin-sidebar__wrapper'>
				<SidebarLogo title='HEBE' />
				<CloseButton show={!!open} setOpen={setOpen} />
				<SidebarList />
				<div className='admin-sidebar__overlay'></div>
			</div>
			<div
				className={`admin-sidebar-modal${!open ? ' d-none' : ''}`}
				onClick={() => setOpen(false)}
			></div>
		</div>
	);
}

Sidebar.propTypes = {
	isMobile: PropTypes.bool,
	isExpanded: PropTypes.bool,
};

export default Sidebar;
