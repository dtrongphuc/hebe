import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
// import { useSelector } from 'react-redux';
// import { selectProductName } from './productSlice';

function Path({ productName }) {
	const { path } = useParams();
	// const name = useSelector(selectProductName);
	return (
		<ul className='site-path'>
			<li>
				<Link to='/' className='site-path__link'>
					HOME
				</Link>
			</li>
			<li>
				<Link to='#' className='site-path__link'>
					{path === 'frontpage'
						? 'HOME PAGE'
						: path === 'my-boyfriends-back'
						? 'MY BOYFRIENDS BACK'
						: 'STAFF EDIT'}
				</Link>
			</li>
			<li>
				<Link to='#' className='site-path__link'>
					{productName}
				</Link>
			</li>
		</ul>
	);
}

Path.propTypes = {
	productName: PropTypes.string,
};

export default Path;
