import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import FormActionHeader from '../FormActionHeader/FormActionHeader';

function FromWrapper({ heading, backTo, onSubmit, validated, children }) {
	return (
		<Form
			noValidate
			onSubmit={onSubmit}
			validated={validated}
			className='position-relative'
		>
			<h4 className='mb-3'>{heading}</h4>
			<FormActionHeader backToLink={backTo.link} backToTitle={backTo.title} />
			<div className='px-4 mt-3'>{children}</div>
		</Form>
	);
}

FromWrapper.propTypes = {
	heading: PropTypes.string,
	backTo: PropTypes.object,
	onSubmit: PropTypes.func,
	validated: PropTypes.bool,
	children: PropTypes.element,
};

export default FromWrapper;
