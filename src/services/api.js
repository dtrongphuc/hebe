import http from './http';

export async function getFrontPageProducts() {
	try {
		const response = await http.get('/product/front-page');
		return response.data;
	} catch (error) {
		return [];
	}
}

export async function getReviews() {
	try {
		const response = await http.get('/reviews');
		return response.data;
	} catch (error) {
		return [];
	}
}

// product api
export async function getProductById(productId) {
	try {
		const response = await http.get(`/product/${productId}`);
		return response.data;
	} catch (error) {
		return error;
	}
}

export async function postNewProduct(formData) {
	try {
		const response = await http.post(`/product/create`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
}

// brand api
export async function postNewBrand(formData) {
	try {
		const response = await http.post(`/brand/create`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
}

export async function getAllBrands() {
	try {
		const response = await http.get(`/brand/get-all`);
		return response.data;
	} catch (error) {
		return error;
	}
}
