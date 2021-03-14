import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ReviewDetails({
	closeDetail,
	detail,
	nextReview,
	prevReview,
}) {
	return (
		<div id='#1-instafeed' className='review__details'>
			<div className='review__details-main'>
				<div className='review__details-main--left'>
					<img
						src={`http://localhost:8080/${detail.image}`}
						alt=''
						className='review__details-img'
					/>
				</div>
				<div className='review__details-main--right'>
					<div className='rv__header'>
						<div className='rv__header-avatar'></div>
						<div className='rv__header-info'>
							<p className='rv__header-name'>hebeboutique</p>
							<p className='rv__header-tag'>@hebeboutique</p>
						</div>
					</div>
					<div className='review__content'>
						<div className='rv__description'>
							<div className='rv__control'>
								<Link to='#' onClick={prevReview}>
									&#8249;
								</Link>
								<Link to='#' onClick={nextReview}>
									&#8250;
								</Link>
							</div>
							<div className='rv__caption'>{detail.content}</div>
						</div>
						<div className='rv__bottom'>
							<span className='rv__date'>{detail.date}</span>
							<span className='rv__view-on'>
								View on Instagram
							</span>
						</div>
					</div>
				</div>
				<div className='review__close' onClick={closeDetail}>
					<FontAwesomeIcon icon={faTimes} />
				</div>
			</div>
			<div className='review__modal' onClick={closeDetail}></div>
		</div>
	);
}
