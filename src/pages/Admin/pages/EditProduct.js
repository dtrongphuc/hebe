import React, { useEffect, useState } from 'react';
import FormProduct from '../components/FormProduct/FormProduct';
import { getProductById, postNewProduct } from 'services/api';
import { useParams } from 'react-router';

const initialFormState = {
	name: '',
	brand: '',
	group: '',
	price: 0,
	saleprice: 0,
	description: '',
	variants: [
		{
			color: '',
			details: [
				{
					size: '',
					quantity: '',
				},
			],
		},
	],
	images: [],
	avatarIndex: 0,
};

export default function EditProduct() {
	let { productId } = useParams();

	const [product, setProduct] = useState(initialFormState);

	useEffect(() => {
		(async function () {
			try {
				if (!productId) return;
				const response = await getProductById(productId);
				if (response?.success) {
					setProduct(response.product);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [productId]);

	return (
		<FormProduct
			productState={product}
			submitRequest={postNewProduct}
			title='Edit product'
		/>
	);
}
