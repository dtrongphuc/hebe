import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../components/Product/productSlice';

export default configureStore({
	reducer: productReducer,
});
