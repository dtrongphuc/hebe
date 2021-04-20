import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { productPriceString } from 'helpers/product';

import afterpay from 'assets/img/DetailProduct/afterpay.png';
import laybuy from 'assets/img/DetailProduct/ico-laybuy.png';
import zip from 'assets/img/DetailProduct/zip-logo.svg';

const floor = (price) => {
	return Math.floor(price * 100) / 100;
};

function Wallet({ price }) {
	const [walletType, setWalletType] = useState({
		afterpay: 0,
		laybuy: 0,
		zip: 0,
	});

	useEffect(() => {
		setWalletType((state) => ({
			...state,
			afterpay: price > 0 ? floor(price / 4) : 0,
			laybuy: price > 0 ? floor(price / 6) : 0,
			zip: price > 0 ? floor(price / 4) : 0,
		}));
	}, [price]);

	return (
		<div className='product-detail__wallet'>
			<p className='higher-text'>{productPriceString(price)}</p>
			<div className='higher-text'>
				<span>or make 4 interest-free payments of </span>
				<strong>{productPriceString(walletType?.afterpay)} NZD</strong>
				<span> fortnightly with</span>
				<div className='wallet-info'>
					<img src={afterpay} alt='afterpay' className='mr-2' />
					<Link to='#' className='wallet-more__link'>
						More info
					</Link>
				</div>
			</div>
			<div className='mt-5 small-text'>
				Or 6 weekly interest-free payments of{' '}
				<strong>{productPriceString(walletType?.laybuy)}</strong>
				<span> with</span>
				<div className='wallet-info'>
					<img src={laybuy} alt='laybuy' className='mr-2' />
					<span>Laybuy </span>
					<Link to='#' className='wallet-more__link'>
						What this?
					</Link>
				</div>
			</div>
			<div className='d-flex justify-content-center mt-3'>
				<div className='small-text'>
					<span>or 4 interest free payments </span>
					<br />
					<span>of {productPriceString(walletType?.zip)} </span>
					<Link to='#' className='wallet-more__link'>
						Learn more
					</Link>
				</div>
				<img
					src={zip}
					alt='zip'
					style={{ height: '24px', marginTop: '3px' }}
					className='ml-3'
				/>
			</div>
		</div>
	);
}

Wallet.propTypes = {
	price: PropTypes.number,
};

export default Wallet;
