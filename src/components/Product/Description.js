import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductInfoText } from './productSlice';
import Form from './Form/Index';

export default function Description() {
	const info = useSelector(selectProductInfoText);

	return (
		<>
			<div className='product-page__content'>
				<p className='product-page__content__category'>
					{info.category}
				</p>
				<h2 className='product-page__content__name'>{info.name}</h2>
				<div className='product-page__content__description'>
					{info.description}
				</div>
				<Form />
			</div>
		</>
	);
}
