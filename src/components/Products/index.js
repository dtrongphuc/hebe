import React from 'react';
import ProductList from './ProductList';

import './styles.scss';

export default function index() {
	return (
		<section className='home__products'>
			<h2 className='home__products-title'>Featured Products</h2>
			<ProductList />
		</section>
	);
}
