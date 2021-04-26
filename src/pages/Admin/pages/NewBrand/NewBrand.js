import React from 'react';
import { postNewBrand } from 'services/api';
import FormBrand from 'pages/Admin/components/FormBrand/FormBrand';

const initialFormState = {
	name: '',
	description: '',
	image: [],
};

function NewBrand() {
	return (
		<FormBrand
			brandState={initialFormState}
			title='Create new brand'
			submitRequest={postNewBrand}
		/>
	);
}

export default NewBrand;
