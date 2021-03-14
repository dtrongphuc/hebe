import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectProductName } from './productSlice';

export default function CategoryPath() {
	const { path } = useParams();
	const name = useSelector(selectProductName);
	return (
		<ul className='category-path'>
			<li>
				<Link to='/' className='category-path__link'>
					HOME
				</Link>
			</li>
			<li>
				<Link to='#' className='category-path__link'>
					{path === 'frontpage'
						? 'HOME PAGE'
						: path === 'my-boyfriends-back'
						? 'MY BOYFRIENDS BACK'
						: 'STAFF EDIT'}
				</Link>
			</li>
			<li>
				<Link to='#' className='category-path__link'>
					{name}
				</Link>
			</li>
		</ul>
	);
}
