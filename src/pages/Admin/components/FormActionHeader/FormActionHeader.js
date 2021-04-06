import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function FormActionHeader({ backToTitle, backToLink }) {
	return (
		<div
			style={{ top: 0, zIndex: 100 }}
			className='form-action-header d-flex align-items-center justify-content-between position-sticky py-3 px-4 bg-white rounded shadow-sm'
		>
			<Link to={backToLink} className='text-decoration-none'>
				<span className='align-text-bottom lh-lg'>&#8592; </span>
				{backToTitle}
			</Link>
			<div>
				<Button variant='danger' type='button' size='sm' className='mr-2 fs-3'>
					Cancel
				</Button>
				<Button variant='primary' type='submit' size='sm'>
					Submit
				</Button>
			</div>
		</div>
	);
}

FormActionHeader.propTypes = {
	backToTitle: PropTypes.string,
	backToLink: PropTypes.string,
};

export default FormActionHeader;
