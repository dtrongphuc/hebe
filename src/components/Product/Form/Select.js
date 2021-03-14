import React from 'react';

export default function Select({ name, onChange, current, ...rest }) {
	const selectBy = Object.keys(rest)[0];

	return (
		<div className='product-page__select-wrapper'>
			<label htmlFor={name} className='product-page__select-label'>
				{name}
			</label>
			<select
				name={name}
				id={`product-${name}`}
				className='product-page__select-input'
				onChange={onChange}
				value={current}
			>
				{!!selectBy &&
					Array.isArray(rest[`${selectBy}`]) &&
					rest[`${selectBy}`].map((option) => (
						<option value={option} key={option}>
							{option}
						</option>
					))}
			</select>
		</div>
	);
}
