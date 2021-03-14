import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		loading: false,
		product: {
			name: '',
			images: [],
			description: '',
			category: {
				_id: '',
				name: '',
			},
			sizeAndQuantity: [],
			colors: [],
		},
	},
	reducers: {
		setProduct: (state, action) => {
			state.loading = false;
			state.product = action.payload;
		},
		fetchProduct: (state) => {
			state.loading = true;
		},
	},
});

export const { setProduct, fetchProduct } = productSlice.actions;

export const selectImages = (state) => state.product.images;
export const selectProductInfoText = (state) => ({
	name: state.product.name,
	category: state.product.category.name,
	description: state.product.description,
});
export const selectProductName = (state) => state.product.name;
export const selectColors = (state) => state.product.colors;
export const selectSizeAndQuantity = (state) => state.product.sizeAndQuantity;

export default productSlice.reducer;
