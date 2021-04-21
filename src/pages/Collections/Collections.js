import React, { useEffect, useState } from 'react';
import Hero from 'components/Collection/Hero';
import Sort from 'components/Collection/Sort';
import ProductList from 'components/Products/ProductList';
import Shop from 'layouts/Shop';
import { getBrandCollections } from 'services/api';
import { useParams } from 'react-router';

const BEST_SELLING = 'best-selling';
const PRICE_LOW_TO_HIGH = 'price-low-to-high';
const PRICE_HIGH_TO_LOW = 'price-high-to-low';

function Collections() {
	const [info, setInfo] = useState({});
	const [products, setProducts] = useState([]);
	const { path } = useParams();

	useEffect(() => {
		(async function () {
			try {
				let response = await getBrandCollections(path);
				if (response) {
					setInfo(response.data.info);
					setProducts(response.data.products);
					console.log(response);
				}
			} catch (error) {
				console.log(error.data);
			}
		})();
	}, [path]);

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
				<Hero
					title={info?.name}
					background={info?.image}
					heroText={info?.description}
				/>
				<Sort onSortChange={onSortChange} />
				<ProductList products={products} />
			</div>
		</Shop>
	);
}

export default Collections;
