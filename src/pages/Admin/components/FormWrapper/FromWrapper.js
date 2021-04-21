import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import FormActionHeader from '../FormActionHeader/FormActionHeader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FromWrapper({
	formRef,
	heading,
	backTo,
	onSubmit,
	validated,
	isLoading,
	children,
}) {
	return (
		<Form
			noValidate
			ref={formRef}
			onSubmit={onSubmit}
			validated={validated}
			className='position-relative'
		>
			<h4 className='mb-3'>{heading}</h4>
			<FormActionHeader
				backToLink={backTo.link}
				backToTitle={backTo.title}
				isLoading={isLoading}
			/>
			<div className='px-4 mt-3'>{children}</div>
			<ToastContainer />
		</Form>
	);
}

FromWrapper.propTypes = {
	heading: PropTypes.string,
	backTo: PropTypes.object,
	onSubmit: PropTypes.func,
	validated: PropTypes.bool,
	isLoading: PropTypes.bool,
	children: PropTypes.element,
};

export default FromWrapper;
