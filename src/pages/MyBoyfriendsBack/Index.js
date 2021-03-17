import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Collection/Hero';
import Sort from '../../components/Collection/Sort';
import ProductList from '../../components/Products/ProductList';
import Footer from '../../components/Footer';
import { getFeaturedProducts } from '../../helpers/api';
import background from '../../assets/img/unnamed-2_2048x2048.webp';

const BEST_SELLING = 'best-selling';
const PRICE_LOW_TO_HIGH = 'price-low-to-high';
const PRICE_HIGH_TO_LOW = 'price-high-to-low';
const heroText = [
	`My Boyfriends Back is Hebe's self designed
clothing label, sizing from 6-16. New Zealand
designed and made, My Boyfriends Back is nestled
in Wellington City’s backyard; the winding,
wonderland of the Wairarapa. Juxtaposing the
hustle and bustle of the city with the relative
calm and fragrant air of the hills, this is
beautifully reflected in designer Dani
Burkhart’s creations.`,
	`Every season Dani builds her collections around
function, comfort and quality – always combining
feminine romanticism and a heavier, darker
inspiration. Dani is drawn to a feminine, moody
aesthetic. Preferring classic styles to have a
touch of drama through drape, texture or tone.`,
	`Since 2010 My Boyfriends Back has blossomed and
evolved, taking inspiration from imagery,
culture trends and from her different attitude
to fashion now that she is a mother. This is
reflected in her approach to every aspect of the
brand – from the collections, to the marketing.`,
	`Dani Burkhart is proud to be designing and
producing her collection in New Zealand –
collaborating and working with some of the
finest New Zealand based artists, photographers,
writers and productions teams to enable her to
bring her vision to life.`,
];

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

	const onSortChange = (e) => {
		const selected = e.target.value;
		switch (selected) {
			case BEST_SELLING:
				let sellingProducts = []
					.concat(products)
					.sort((product1, product2) => {
						let salePrice1 = product1.price - product1.salePrice;
						let salePrice2 = product2.price - product2.salePrice;

						return salePrice1 < salePrice2
							? -1
							: salePrice1 > salePrice2
							? 1
							: 0;
					});
				setProducts(sellingProducts);
				break;
			case PRICE_LOW_TO_HIGH:
				let lthProducts = []
					.concat(products)
					.sort((product1, product2) => {
						let price1 = product1.price;
						let price2 = product2.price;

						return price1 < price2 ? -1 : price1 > price2 ? 1 : 0;
					});
				setProducts(lthProducts);
				break;
			case PRICE_HIGH_TO_LOW:
				let htlProducts = []
					.concat(products)
					.sort((product1, product2) => {
						let price1 = product1.price;
						let price2 = product2.price;

						return price1 > price2 ? -1 : price1 < price2 ? 1 : 0;
					});
				setProducts(htlProducts);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<Header />
			<div className='collection-page'>
				<Hero
					title='My Boyfriends Back'
					background={background}
					heroText={heroText}
				/>
				<Sort onSortChange={onSortChange} />
				<ProductList products={products} />
			</div>
			<Footer />
		</>
	);
}
