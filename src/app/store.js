import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../components/DetailProduct/productSlice';

export default configureStore({
	reducer: productReducer,
});
