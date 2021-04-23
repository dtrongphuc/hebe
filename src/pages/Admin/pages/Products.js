import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Actions from '../components/TableWrapper/Actions';
import TableWrapper from '../components/TableWrapper/TableWrapper';
import { getAllProducts } from 'services/api';

const columns = [
	{
		title: '#',
		key: 'stt',
	},
	{
		title: 'name',
		key: 'name',
	},
	{
		title: 'brand',
		key: 'brand',
	},
	{
		title: 'price',
		key: 'price',
	},
	{
		title: 'stock',
		key: 'stock',
	},
];

export default function Products() {
	const [products, setProducts] = useState([]);
	let { url } = useRouteMatch();

	useEffect(() => {
		(async function () {
			try {
				const response = await getAllProducts();
				if (response?.success) {
					setProducts(response.products);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
			<Link to={`${url}/new-product`}>
				<button className='btn btn-primary'>New product</button>
			</Link>
			<TableWrapper columns={columns} dataSrcLength={products?.length}>
				<>
					{products &&
						products.map((row, index) => (
							<tr key={row._id}>
								<td>{index + 1}</td>
								<td className='text-uppercase'>{row.name}</td>
								<td className='text-uppercase'>{row.brand.name}</td>
								<td className='text-uppercase'>{row.price}</td>
								<td className='text-uppercase'>{row.quantity}</td>
								<Actions id={row._id} />
							</tr>
						))}
				</>
			</TableWrapper>
		</>
	);
}
