import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from '../../assets/img/Reviews/157033874_448456089639541_2717178544976551486_n.jpg';
import ReviewDetails from './ReviewDetails';

export default function ReviewItem() {
	const [showDetail, setShowDetail] = useState(false);
	const toggleDetail = (e) => {
		e.preventDefault();
		document.querySelector('body').style.overflowY = !showDetail
			? 'hidden'
			: 'auto';
		setShowDetail(!showDetail);
	};

	return (
		<>
			<div className='review-item'>
				<Link
					to='#1-instafeed'
					className='review-item__link'
					onClick={toggleDetail}
				>
					<img src={Image} alt='' className='review-item__img' />
					<div className='review-item__overlay'>
						<FontAwesomeIcon
							icon={faInstagram}
							color='#fff'
							size='lg'
						/>
					</div>
				</Link>
			</div>
			{showDetail && <ReviewDetails toggleDetail={toggleDetail} />}
		</>
	);
}
