import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Path from './Path';
import Form from './Form/Form';
import SlideShow from './SlideShow';
import { getProductByPathName } from '../../services/api';
import './styles.scss';

export default function DetailProduct() {
	const [product, setProduct] = useState({});
	const { productPath } = useParams();

	useEffect(() => {
		(async function () {
			try {
				const response = await getProductByPathName(productPath);
				if (response) {
					setProduct(response);
				}
			} catch (error) {
				console.log(error.data);
			}
		})();
	}, [productPath]);

	return (
		<div className='product-page'>
			<Container fluid='lg'>
				<Path productName={product?.name} />
				<Row>
					<Col md={7}>
						<SlideShow images={product?.images} />
					</Col>
					<Col md={5}>
						<div className='product-page__content'>
							<p className='product-page__content__brand'>
								{product?.brand?.name}
							</p>
							<h2 className='product-page__content__name'>{product?.name}</h2>
							{product?.description?.length < 200 && (
								<div
									className='product-page__content__description'
									dangerouslySetInnerHTML={{
										__html: product?.description,
									}}
								/>
							)}

							<Form variants={product?.variants} price={product?.price} />
						</div>
					</Col>

					{product?.description?.length >= 200 && (
						<Col xs={12} className='mt-4'>
							<div
								className='product-page__content__description'
								dangerouslySetInnerHTML={{
									__html: product?.description,
								}}
							/>
						</Col>
					)}
				</Row>
			</Container>
		</div>
	);
}
