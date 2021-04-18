import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectProductInfoText } from './productSlice';
import Form from './Form/Form';

function Description({ name, brand, description, variants, price }) {
	// const info = useSelector(selectProductInfoText);

	return (
		<>
			<div className='product-page__content'>
				<p className='product-page__content__brand'>{brand}</p>
				<h2 className='product-page__content__name'>{name}</h2>
				<div
					className='product-page__content__description'
					dangerouslySetInnerHTML={{
						__html: description,
					}}
				/>
				<Form variants={variants} price={price} />
			</div>
		</>
	);
}

Description.propTypes = {
	name: PropTypes.string,
	brand: PropTypes.string,
	description: PropTypes.string,
};

export default Description;
