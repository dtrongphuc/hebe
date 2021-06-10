import React from 'react';
import './styles.scss';
// import PropTypes from 'prop-types'

function Input({ type, placeholder }) {
	return (
		<div className='auth-input__group'>
			<input type={type} placeholder={placeholder} />
		</div>
	);
}

// Input.propTypes = {

// }

export default Input;
