import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { selectImages } from './productSlice';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlideShow() {
	const images = useSelector(selectImages);

	const settings = {
		className: 'product-outstanding__slider',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		rows: 1,
		dots: true,
	};
	return (
		<Slider {...settings}>
			{images &&
				Array.isArray(images) &&
				images.map((image) => (
					<div key={image.split('\\')[1]}>
						<div className='product-slide__wrapper'>
							<img
								src={`http://localhost:8080/${image}`}
								alt=''
								className='product-slide__img'
							/>
						</div>
					</div>
				))}
		</Slider>
	);
}
