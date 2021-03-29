import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import CategoryPath from './CategoryPath';
import Description from './Description';
import SlideShow from './SlideShow';
import { getProductById } from '../../services/api';
import { fetchProduct, setProduct } from './productSlice';

import './styles.scss';

export default function Index() {
	const { productId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		(async function () {
			try {
				dispatch(fetchProduct);
				const response = await getProductById(productId);
				dispatch(setProduct(response));
			} catch (error) {
				console.log(error);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId]);

	return (
		<div className='product-page'>
			<Container fluid='lg'>
				<CategoryPath />
				<Row>
					<Col md={7}>
						<SlideShow />
					</Col>
					<Col md={5}>
						<Description />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
