import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewItem from './ReviewItem';

export default function ReviewList() {
	return (
		<Container fluid={true} className='p-0'>
			<Row noGutters>
				<Col>
					<ReviewItem />
				</Col>
				<Col>
					<ReviewItem />
				</Col>
				<Col>
					<ReviewItem />
				</Col>
				<Col>
					<ReviewItem />
				</Col>
				<Col>
					<ReviewItem />
				</Col>
				<Col>
					<ReviewItem />
				</Col>
			</Row>
		</Container>
	);
}
