import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Input({ type, placeholder }) {
	return (
		<div className='auth-input__group'>
			<input type={type} placeholder={placeholder} />
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
