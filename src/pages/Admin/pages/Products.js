import React, { useMemo, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import DashboardTable from '../components/DashboardTable/DashboardTable';

export default function Products() {
	const [products] = useState([]);
	let { url } = useRouteMatch();

	const columns = useMemo(
		() => [
			{
				title: '#',
				key: 'stt',
			},
			{
				title: 'Product name',
				key: 'name',
			},
			{
				title: 'Category',
				key: 'category',
			},
			{
				title: 'Collection',
				key: 'collection',
			},
			{
				title: 'Price',
				key: 'price',
			},
			{
				title: 'Stock',
				key: 'stock',
			},
		],
		[]
	);
	return (
		<>
			<Link to={`${url}/new-product`}>
				<button className='btn btn-primary'>New product</button>
			</Link>
			<DashboardTable columns={columns} dataSource={products} />
		</>
	);
}
