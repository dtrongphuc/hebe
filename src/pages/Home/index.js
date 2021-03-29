import React, { useEffect, useState } from 'react';
import Hero from '../../components/Header/Hero';
import HeroSection from '../../components/HeroSection';
import Reviews from '../../components/Reviews';
import ProductList from '../../components/Products/ProductList';
import Shop from '../../layouts/Shop';

import { getFeaturedProducts } from '../../services/api';
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
		<Shop>
			<Hero />
			<section className='home__products'>
				<h2 className='home__products-title'>Featured Products</h2>
				<ProductList products={products} />
			</section>
			<HeroSection />
			<Reviews />
		</Shop>
	);
}
