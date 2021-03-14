import React, { useEffect, useState } from 'react';
import { getFeaturedProducts } from '../../helpers/api';
import ProductList from './ProductList';

import './styles.scss';

export default function Index() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async function () {
			try {
				let productsData = await getFeaturedProducts();
				setProducts(productsData);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<section className='home__products'>
			<h2 className='home__products-title'>Featured Products</h2>
			<ProductList products={products} />
		</section>
	);
}
