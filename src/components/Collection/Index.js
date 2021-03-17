import React from 'react';
import ProductList from '../Products/ProductList';
// import { Container } from 'react-bootstrap';
import Hero from './Hero';
import Sort from './Sort';
import './styles.scss';

export default function Index({ products }) {
	return (
		<div className='collection-page'>
			<Hero />
			<Sort />
			<ProductList products={products} />
		</div>
	);
}
