import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Header/Hero';
import Products from '../../components/FeaturedProducts/Index';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';

import './styles.scss';
import Reviews from '../../components/Reviews';

export default function Index() {
	return (
		<>
			<Header />
			<Hero />
			<Products />
			<HeroSection />
			<Reviews />
			<Footer />
		</>
	);
}
