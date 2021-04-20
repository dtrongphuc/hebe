import React, { useEffect, useState } from 'react';
import Hero from '../../components/Header/Hero';
import HeroSection from '../../components/HeroSection';
import ReviewList from '../../components/Reviews/ReviewList';
import ProductList from '../../components/Products/ProductList';
import Shop from '../../layouts/Shop';

import { getFrontPageProducts } from '../../services/api';
import './styles.scss';

export default function Index() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async function () {
			try {
				let productsData = await getFrontPageProducts();
				setProducts(productsData);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<Shop>
			<Hero />
			<section className='home__products'>
				<h2 className='home__products-title'>Featured Products</h2>
				<ProductList products={products} />
			</section>
			<HeroSection />
			<ReviewList />
		</Shop>
	);
}
