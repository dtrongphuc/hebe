import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import InputQuantity from './InputQuantity';
import ButtonAddToCart from './ButtonAddToCart';

const findAvailableSize = (details) => {
	const matched = details.find((detail) => +detail.quantity > 0);
	return matched;
};

function Index({ variants }) {
	const [addQuantity, setAddQuantity] = useState(1);
	const [currentVariant, setCurrentVariant] = useState(null);
	const [display, setDisplay] = useState({});

	// first mount
	useEffect(() => {
		// find available variant to display
		const availableVariant = variants?.find((variant) => {
			let matched = findAvailableSize(variant.details);
			return typeof matched !== 'undefined';
		});
		if (typeof availableVariant !== 'undefined') {
			setCurrentVariant(availableVariant);
			let availableSize = findAvailableSize(availableVariant.details);
			setDisplay((state) => ({
				...state,
				color: availableVariant.color,
				size: availableSize.size,
				maxQuantity: availableSize.quantity,
				quantity: 1,
			}));
		} else if (Array.isArray(variants) && variants.length > 0) {
			// if not, set first variant
			setCurrentVariant(variants[0]);
		}
	}, [variants]);

	// selection change
	const sizeChange = (e) => {
		let value = e.currentTarget.value;

		if (!!value) {
			const matched = currentVariant.details.find(
				(detail) => detail.size === value
			);
			if (typeof matched !== 'undefined') {
				setDisplay((state) => ({
					...state,
					size: value,
					maxQuantity: +matched.quantity,
					quantity: +matched.quantity > 0 ? 1 : 0,
				}));
			}
		}
	};

	const colorChange = (e) => {
		const value = e.currentTarget.value;
		if (!value) return;
		let matched = variants.find((variant) => variant.color === value);
		if (typeof color !== 'undefined') {
			setCurrentVariant((state) => ({
				...state,
				color: matched.color,
				details: matched.details,
			}));

			let firstDetail = matched.details[0];

			setDisplay((state) => ({
				...state,
				color: matched.color,
				size: firstDetail.size,
				maxQuantity: firstDetail.quantity,
				quantity: +firstDetail.quantity > 0 ? 1 : 0,
			}));
		}
	};

	const handleIncrease = () => {
		setAddQuantity(addQuantity + 1);
	};

	const handleDecrease = () => {
		setAddQuantity(addQuantity > 1 ? addQuantity - 1 : 1);
	};

	const handleQuantityChange = (e) => {
		let value = e.target.value;
		if (+value >= 1) setAddQuantity(+value);
	};

	return (
		<form action='#' className='product-page__form'>
			<Select
				name='size'
				sizes={currentVariant?.details?.map((current) => current.size)}
				current={display?.size}
				onChange={sizeChange}
			/>
			<Select
				name='color'
				colors={variants?.map((variant) => variant.color)}
				onChange={colorChange}
			/>
			<InputQuantity
				increase={handleIncrease}
				decrease={handleDecrease}
				quantity={addQuantity}
				onChange={handleQuantityChange}
				max={
					currentVariant?.detais?.find((detail) => detail.size === display.size)
						?.size || 0
				}
			/>
			<ButtonAddToCart price={299} isSoldOut={display.maxQuantity === 0} />
		</form>
	);
}

Index.propTypes = {
	variants: PropTypes.array,
};

export default Index;
