import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CircleLoading from '../../../../components/CircleLoading/CircleLoading';
import './styles.scss';
function FormActionHeader({ backToTitle, backToLink, isLoading }) {
	return (
		<div
			style={{ top: 0, zIndex: 100 }}
			className='form-action-header d-flex align-items-center justify-content-between position-sticky py-3 px-4 bg-white rounded shadow-sm'
		>
			<Link to={backToLink} className='text-decoration-none'>
				<span className='align-text-bottom lh-lg'>&#8592; </span>
				{backToTitle}
			</Link>
			<div className='d-flex align-items-center'>
				<Button
					disabled={isLoading}
					variant='danger'
					type='button'
					size='sm'
					className='mr-2 fs-3 btn-form-action'
				>
					Cancel
				</Button>
				<Button
					disabled={isLoading}
					variant='primary'
					type='submit'
					size='sm'
					className='btn-form-action'
				>
					<CircleLoading
						color='#fff'
						size='sm'
						loading={isLoading}
						customClass='mr-2 mb-2'
					/>
					<span>Submit</span>
				</Button>
			</div>
		</div>
	);
}

FormActionHeader.propTypes = {
	backToTitle: PropTypes.string,
	backToLink: PropTypes.string,
	isLoading: PropTypes.bool,
};

export default FormActionHeader;
