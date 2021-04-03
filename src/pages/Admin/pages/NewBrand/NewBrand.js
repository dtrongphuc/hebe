import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FromWrapper from '../../components/FormWrapper/FromWrapper';

function NewBrand() {
	const [config] = useState({
		validated: false,
		loading: false,
		error: false,
	});

	const onSubmit = (e) => {};

	return (
		<FromWrapper
			heading='Create new brand'
			onSubmit={onSubmit}
			validated={config.validated}
			backTo={{ link: '/admin/brands', title: 'Brand list' }}
		>
			<>
				<p>asdasd</p>
			</>
		</FromWrapper>
	);
}

// NewBrand.propTypes = {};

export default NewBrand;
