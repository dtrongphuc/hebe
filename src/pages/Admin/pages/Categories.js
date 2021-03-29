import React, { useEffect, useState } from 'react';
import DashboardTable from '../components/DashboardTable/DashboardTable';
import NewCategory from '../components/NewCategory/NewCategory';
import { getAllCategories } from '../../../services/api';

export default function Categories() {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async function () {
			try {
				const response = await getAllCategories();
				response && setCategories(response?.categories);
				error && setError(false);
			} catch (error) {
				!error && setError(true);
			}
		})();
	}, [error]);

	const columns = [
		{
			title: '#',
			key: 'stt',
		},
		{
			title: 'Name',
			key: 'name',
		},
	];
	return (
		<>
			<NewCategory />
			{!error ? (
				<DashboardTable columns={columns} dataSource={categories} />
			) : (
				'Error'
			)}
		</>
	);
}
