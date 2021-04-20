import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import ReviewDetails from './ReviewDetails';

export default function ReviewItem({ openDetail, review }) {
	return (
		<>
			<div className='review-item'>
				<Link
					to='#1-instafeed'
					className='review-item__link'
					onClick={openDetail(review._id)}
				>
					<img src={review.image} alt='' className='review-item__img' />
					<div className='review-item__overlay'>
						<FontAwesomeIcon icon={faInstagram} color='#fff' size='lg' />
					</div>
				</Link>
			</div>
		</>
	);
}
