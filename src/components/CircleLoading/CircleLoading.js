import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function CircleLoading({ color, size, loading, customClass }) {
	return (
		<div
			className={`circle-loading ${size} ${
				loading && 'd-inline-block'
			} ${customClass}`}
		>
			<div style={{ borderTopColor: color }}></div>
			<div style={{ borderTopColor: color }}></div>
			<div style={{ borderTopColor: color }}></div>
			<div style={{ borderTopColor: color }}></div>
		</div>
	);
}

CircleLoading.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
};

export default CircleLoading;
