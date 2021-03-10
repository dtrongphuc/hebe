import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/img/Products/image_3b15acc0-1359-4849-87ed-e7ea255a1baf_large.webp';
import ProductPrice from './ProductPrice';

export default function ProductItem({ isSoldOut }) {
	return (
		<div className='product-item'>
			<Link to='#'>
				<img src={img} alt='' className='product-item__image' />
			</Link>
			<div className='product-item__description'>
				<Link to='#' className='product-item__category'>
					marle
				</Link>
				<p className='product-item__name'>albie cardigan</p>
				<ProductPrice price={299} className='product-item__price' />
				{isSoldOut && <i className='sold-out'>Sold Out</i>}
			</div>
		</div>
	);
}
