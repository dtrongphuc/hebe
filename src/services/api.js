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
export async function getProductByPathName(path) {
	try {
		const response = await http.get(`/product/path/${path}`);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getProductById(productId) {
	try {
		const response = await http.get(`/product/id/${productId}`);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function getAllProducts() {
	try {
		const response = await http.get(`/product/getAll`);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
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

export async function getEditProduct(productId) {
	try {
		const response = await http.get(`/product/edit/id/${productId}`);
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

export async function getBrandCollections(path) {
	try {
		const response = await http.get(`/brand/${path}`);
		return response.data;
	} catch (error) {
		return error;
	}
}

// group api
export async function postNewGroup(formData) {
	try {
		const response = await http.post(`/group/create`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
}

export async function getAllGroups() {
	try {
		const response = await http.get(`/group/get-all`);
		return response.data;
	} catch (error) {
		return error;
	}
}

export async function getGroupCollections(path) {
	try {
		const response = await http.get(`/group/${path}`);
		return response.data;
	} catch (error) {
		return error;
	}
}
