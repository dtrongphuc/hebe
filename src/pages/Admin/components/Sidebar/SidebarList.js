import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faClipboardList } from '@fortawesome/free-solid-svg-icons';

export default function SidebarList() {
	let { url } = useRouteMatch();

	return (
		<ul className='sidebar-list'>
			<li className='sidebar-list__item'>
				<Link to={`${url}`}>
					<FontAwesomeIcon icon={faChartPie} size='2x' className='icon' />
					<p>Dashboard</p>
				</Link>
			</li>
			<li className='sidebar-list__item'>
				<Link to={`${url}/brands`}>
					<FontAwesomeIcon icon={faClipboardList} size='2x' className='icon' />
					<p>Brands</p>
				</Link>
			</li>
			<li className='sidebar-list__item'>
				<Link to={`${url}/groups`}>
					<FontAwesomeIcon icon={faClipboardList} size='2x' className='icon' />
					<p>Groups</p>
				</Link>
			</li>
			<li className='sidebar-list__item'>
				<Link to={`${url}/products`}>
					<FontAwesomeIcon icon={faClipboardList} size='2x' className='icon' />
					<p>Products</p>
				</Link>
			</li>
		</ul>
	);
}
