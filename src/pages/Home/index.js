import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Header/Hero';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Reviews from '../../components/Reviews';
import ProductList from '../../components/Products/ProductList';

import { getFeaturedProducts } from '../../helpers/api';
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
		<>
			<Header />
			<Hero />
			<section className='home__products'>
				<h2 className='home__products-title'>Featured Products</h2>
				<ProductList products={products} />
			</section>
			<HeroSection />
			<Reviews />
			<Footer />
		</>
	);
}
