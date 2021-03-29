import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewItem from './ReviewItem';
import { getReviews } from '../../services/api';
import ReviewDetails from './ReviewDetails';

export default function ReviewList() {
	const [reviews, setReviews] = useState([]);
	const [showDetail, setShowDetail] = useState(false);
	const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

	useEffect(() => {
		(async function () {
			try {
				const response = await getReviews();
				setReviews(response);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const openDetail = (id) => (e) => {
		e.preventDefault();
		let index = reviews.findIndex((review) => review._id === id);
		if (!!index) {
			setCurrentDetailIndex(index);
		}
		document.querySelector('body').style.overflowY = 'hidden';
		setShowDetail(true);
	};

	const closeDetail = (e) => {
		e.preventDefault();
		document.querySelector('body').style.overflowY = 'auto';
		setShowDetail(false);
	};

	const nextReview = (e) => {
		e.preventDefault();

		setCurrentDetailIndex(
			currentDetailIndex >= reviews.length - 1
				? 0
				: currentDetailIndex + 1
		);
	};

	const prevReview = (e) => {
		e.preventDefault();

		setCurrentDetailIndex(
			currentDetailIndex <= 0
				? reviews.length - 1
				: currentDetailIndex - 1
		);
	};

	return (
		<>
			<Container fluid={true} className='p-0'>
				<Row noGutters>
					{!!reviews &&
						Array.isArray(reviews) &&
						reviews.map((review) => (
							<Col key={review._id}>
								<ReviewItem
									review={review}
									openDetail={openDetail}
								/>
							</Col>
						))}
				</Row>
			</Container>
			{showDetail && (
				<ReviewDetails
					closeDetail={closeDetail}
					detail={reviews[currentDetailIndex]}
					nextReview={nextReview}
					prevReview={prevReview}
				/>
			)}
		</>
	);
}
