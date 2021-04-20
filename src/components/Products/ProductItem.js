import React from 'react';
import { Link } from 'react-router-dom';

import ProductPrice from './ProductPrice';

export default function ProductItem({ product }) {
	return (
		<div className='product-item'>
			<Link to={`/frontpage/products/${product.path}`}>
				<img
					src={`${product.images[product.avatarIndex]}`}
					alt=''
					className='product-item__image'
				/>
			</Link>
			<div className='product-item__description'>
				<Link to='#' className='product-item__category'>
					{product.brand.name}
				</Link>
				<p className='product-item__name'>{product.name}</p>
				<ProductPrice price={product.price} className='product-item__price' />
				{product.quantity === 0 && <i className='sold-out'>Sold Out</i>}
			</div>
		</div>
	);
}
