import React, { useEffect, useState } from 'react';
import FormProduct from '../components/FormProduct/FormProduct';
import { getEditProduct, postNewProduct } from 'services/api';
import { useParams } from 'react-router';

export default function EditProduct() {
	let { productId } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		(async function () {
			try {
				if (!productId) return;
				const response = await getEditProduct(productId);
				if (response?.success) {
					setProduct(response.product);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [productId]);

	return (
		product && (
			<FormProduct
				productState={product}
				submitRequest={postNewProduct}
				title='Edit product'
			/>
		)
	);
}
