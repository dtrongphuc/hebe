import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import TableWrapper from '../components/TableWrapper/TableWrapper';
import { getAllGroups } from '../../../services/api';
import Actions from '../components/TableWrapper/Actions';

const columns = [
	{
		key: 'stt',
		title: '#',
		width: '40px',
	},
	{
		key: 'name',
		title: 'name',
		width: '30%',
	},
	{
		key: 'description',
		title: 'description',
		width: '30%',
	},
	{
		key: 'image',
		title: 'image',
		width: '20%',
	},
];

export default function Brands() {
	const [status, setStatus] = useState({
		loading: false,
		error: false,
	});
	const [dataSource, setDataSource] = useState([]);
	const { url } = useRouteMatch();

	// fetch groups data source
	useEffect(() => {
		(async function () {
			try {
				setStatus((state) => ({ ...state, loading: true }));
				const response = await getAllGroups();
				if (response) {
					setDataSource(response.groups);
				}
			} catch (error) {
				setStatus({ loading: false, error: true });
			}
		})();
	}, []);

	return (
		<>
			<Link to={`${url}/new-group`}>
				<button className='btn btn-primary'>New group</button>
			</Link>
			{!status?.error ? (
				<TableWrapper columns={columns} dataSrcLength={dataSource?.length}>
					<>
						{dataSource &&
							dataSource.map((row, index) => (
								<tr key={row._id}>
									<td>{index + 1}</td>
									<td>{row.name}</td>
									<td>{row.description}</td>
									<td>
										<img src={row.image} alt={row.name} />
									</td>
									<Actions id={row._id} />
								</tr>
							))}
					</>
				</TableWrapper>
			) : (
				'Error'
			)}
		</>
	);
}
