import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

export default function ProductList() {
	return (
		<Container fluid='lg'>
			<Row className='justify-content-lg-center justify-content-xs-center'>
				<Col xs={12} sm={4}>
					<ProductItem isSoldOut={true} />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
				<Col xs={12} sm={4}>
					<ProductItem />
				</Col>
			</Row>
		</Container>
	);
}
