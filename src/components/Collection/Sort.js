import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

export default function Sort({ onSortChange }) {
	return (
		<Container fluid='lg'>
			<div className='collection__sort'>
				<div className='collection__sort__wrapper'>
					<label
						htmlFor='collection-sort'
						className='collection__sort__label'
					>
						Sort:{' '}
					</label>
					<select
						name='sort'
						id='collection-sort'
						className='collection__sort__select'
						onChange={onSortChange}
					>
						<option value='best-selling'>Best Selling</option>
						<option value='price-low-to-high'>
							Price, low to high
						</option>
						<option value='price-high-to-low'>
							Price, high to low
						</option>
					</select>
				</div>
			</div>
		</Container>
	);
}
