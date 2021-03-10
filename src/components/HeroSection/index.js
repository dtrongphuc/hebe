import React from 'react';
import './styles.scss';
import Background from '../../assets/img/homepage_lower_image.jpg';

export default function index() {
	return (
		<div className='hero-section'>
			<div
				className='hero-section__wrapper'
				style={{ backgroundImage: `url(${Background})` }}
			>
				<div className='hero-section__content'>
					Shop My Boyfriends Back
				</div>
			</div>
		</div>
	);
}
