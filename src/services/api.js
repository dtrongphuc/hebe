import http from './http';

export async function getFeaturedProducts() {
	try {
		const response = await http.get('/featured-products');
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

export async function getProductById(productId) {
	try {
		const response = await http.get(`/products/${productId}`);
		return response.data;
	} catch (error) {
		return {};
	}
}
