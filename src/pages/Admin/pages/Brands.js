import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DashboardTable from '../components/DashboardTable/DashboardTable';

export default function Brands() {
	const [error] = useState(false);
	const { url } = useLocation();

	return (
		<>
			<Link to={`${url}/new-brand`}>
				<button className='btn btn-primary'>New brand</button>
			</Link>
			{!error ? <DashboardTable /> : 'Error'}
		</>
	);
}
