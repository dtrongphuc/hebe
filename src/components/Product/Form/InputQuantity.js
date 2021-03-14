import React from 'react';

export default function InputQuantity({
	increase,
	decrease,
	quantity,
	onChange,
	max,
}) {
	return (
		<div
			className={`product-page__quantity-wrapper ${max <= 0 && 'd-none'}`}
		>
			<label htmlFor='quantity' className='product-page__quantity-label'>
				quantity
			</label>
			<div className='qty'>
				<button
					type='button'
					className='qty__btn qty__btn--down'
					onClick={decrease}
				>
					-
				</button>
				<input
					type='number'
					name='quantity'
					id='quantity'
					className='product-page__quantity-input'
					value={quantity}
					onChange={onChange}
					step='1'
					min='1'
					max={max}
				/>
				<button
					type='button'
					className='qty__btn qty__btn--up'
					onClick={increase}
				>
					+
				</button>
			</div>
		</div>
	);
}
