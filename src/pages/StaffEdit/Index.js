import React, { useEffect, useState } from 'react';
import Hero from '../../components/Collection/Hero';
import Sort from '../../components/Collection/Sort';
import ProductList from '../../components/Products/ProductList';
import Shop from '../../layouts/Shop';

import { getFrontPageProducts } from '../../services/api';

import background from '../../assets/img/IMG_3928_2048x2048.jfif';

const BEST_SELLING = 'best-selling';
const PRICE_LOW_TO_HIGH = 'price-low-to-high';
const PRICE_HIGH_TO_LOW = 'price-high-to-low';
const heroText = [
	'Hebe Designer Boutique reflects a strong sense of style and individual tastes, showcasing in a curated space carefully selected brands. Hebe believes that garments should be worn and loved. The ability to transform ones ensemble from day-wear to luxe is available to everyone with a library of labels and aesthetics to choose from in-store. Obsessed with fashion and blurring the lines between clear trends, the staff at Hebe admire looks of all origin and enjoy mashing up outfits, layering and indulging in looks varying from classic to contemporary, feminine and androgynous. Follow our staff edit as we select products from in-store that inspire us towards a new outfit or the addition of effortless essentials. Hebe has a high stock rotation with new garments arriving weekly and loves to support NZ designed.',
];

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

	const onSortChange = (e) => {
		const selected = e.target.value;
		switch (selected) {
			case BEST_SELLING:
				let sellingProducts = [].concat(products).sort((product1, product2) => {
					let salePrice1 = product1.price - product1.salePrice;
					let salePrice2 = product2.price - product2.salePrice;

					return salePrice1 < salePrice2 ? -1 : salePrice1 > salePrice2 ? 1 : 0;
				});
				setProducts(sellingProducts);
				break;
			case PRICE_LOW_TO_HIGH:
				let lthProducts = [].concat(products).sort((product1, product2) => {
					let price1 = product1.price;
					let price2 = product2.price;

					return price1 < price2 ? -1 : price1 > price2 ? 1 : 0;
				});
				setProducts(lthProducts);
				break;
			case PRICE_HIGH_TO_LOW:
				let htlProducts = [].concat(products).sort((product1, product2) => {
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
		<Shop>
			<div className='collection-page'>
				<Hero title='Staff Edit' background={background} heroText={heroText} />
				<Sort onSortChange={onSortChange} />
				<ProductList products={products} />
			</div>
		</Shop>
	);
}
