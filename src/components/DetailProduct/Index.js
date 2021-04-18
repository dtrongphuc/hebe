import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import CategoryPath from './CategoryPath';
import Description from './Description';
import SlideShow from './SlideShow';
import { getProductById } from '../../services/api';
// import { fetchProduct, setProduct } from './productSlice';

import './styles.scss';

export default function Index() {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	// const dispatch = useDispatch();

	useEffect(() => {
		(async function () {
			try {
				// dispatch(fetchProduct);
				const response = await getProductById(productId);
				if (response) {
					console.log(response);
					setProduct(response);
				}
				// dispatch(setProduct(response));
			} catch (error) {
				console.log(error);
			}
		})();
	}, [productId]);

	return (
		<div className='product-page'>
			<Container fluid='lg'>
				<CategoryPath productName={product?.name} />
				<Row>
					<Col md={7}>
						<SlideShow images={product?.images} />
					</Col>
					<Col md={5}>
						<Description
							name={product?.name}
							brand={product?.brand?.name}
							description={product?.description}
							variants={product?.variants}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
