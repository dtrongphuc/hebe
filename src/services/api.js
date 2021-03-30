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

// admin
export async function postNewCategory(categoryName) {
	try {
		const response = await http.post('/new-category', {
			categoryName,
		});
		return response.data;
	} catch (error) {
		return error.errors;
	}
}

export async function getAllCategories() {
	try {
		const response = await http.get('/categories');
		return response.data;
	} catch (error) {
		return error.errors;
	}
}

export async function getAllTopics() {
	try {
		const response = await http.get('/topics');
		return response.data;
	} catch (error) {
		return error.errors;
	}
}
