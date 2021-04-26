import React from 'react';
import FormProduct from '../../components/FormProduct/FormProduct';
import { postNewProduct } from 'services/api';

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

export default function NewProduct() {
	return (
		<FormProduct
			productState={initialFormState}
			submitRequest={postNewProduct}
			title='Create new product'
		/>
	);
}
