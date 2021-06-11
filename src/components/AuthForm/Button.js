import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
	return <button className='btn__auth-submit'>{children}</button>;
}

Button.propTypes = {
	children: PropTypes.string,
};

export default Button;
