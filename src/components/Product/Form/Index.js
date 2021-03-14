import React, { useEffect, useState } from 'react';
import Select from './Select';
import InputQuantity from './InputQuantity';
import ButtonAddToCart from './ButtonAddToCart';
import { useSelector } from 'react-redux';
import { selectColors, selectSizeAndQuantity } from '../productSlice';

export default function Index() {
	const [addQuantity, setAddQuantity] = useState(1);
	const colors = useSelector(selectColors);
	const sizeAndQuantity = useSelector(selectSizeAndQuantity);
	const [currentSelect, setCurrentSelect] = useState({
		size: 0,
		quantity: 0,
	});

	useEffect(() => {
		let available = sizeAndQuantity.filter((item) => item.quantity > 0);
		if (available.length > 0) {
			setCurrentSelect(available[0]);
		} else {
			setCurrentSelect(sizeAndQuantity[0]);
		}
	}, [sizeAndQuantity]);

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

	const handleSelectChange = (e) => {
		let size = e.target.value;
		let matched = sizeAndQuantity.filter((item) => +item.size === +size);
		setCurrentSelect(matched.length === 0 ? 0 : matched[0]);
	};

	return (
		<form action='#' className='product-page__form'>
			<Select
				name='size'
				sizes={
					sizeAndQuantity && sizeAndQuantity.map((item) => item.size)
				}
				current={currentSelect && currentSelect.size}
				onChange={handleSelectChange}
			/>
			<Select name='color' colors={colors} />
			<InputQuantity
				increase={handleIncrease}
				decrease={handleDecrease}
				quantity={addQuantity}
				onChange={handleQuantityChange}
				max={currentSelect && currentSelect.quantity}
			/>
			<ButtonAddToCart
				price={299}
				isSoldOut={currentSelect && currentSelect.quantity === 0}
			/>
		</form>
	);
}
