import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import './styles.scss';

export default function ProductList({ products }) {
	return (
		<Container fluid='lg'>
			<Row className='justify-content-lg-center justify-content-xs-center'>
				{!!products &&
					Array.isArray(products) &&
					products.map((product) => (
						<Col xs={12} sm={4} key={product._id}>
							<ProductItem product={product} />
						</Col>
					))}
			</Row>
		</Container>
	);
}
