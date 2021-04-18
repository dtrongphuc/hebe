import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Path from './Path';
import Description from './Description';
import SlideShow from './SlideShow';
import { getProductById } from '../../services/api';
import './styles.scss';

export default function DetailProduct() {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	useEffect(() => {
		(async function () {
			try {
				const response = await getProductById(productId);
				if (response) {
					setProduct(response);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [productId]);

	return (
		<div className='product-page'>
			<Container fluid='lg'>
				<Path productName={product?.name} />
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
							price={product?.price}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
