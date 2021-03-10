import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
	const handleScrollClick = (e) => {
		e.preventDefault();
		console.log('click');

		let element = document.getElementById('scroll');
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<div className='hero'>
			<div className='hero__wrapper'>
				<Container>
					<div className='hero__content'>
						<p>Summer Sale</p>
						<Link to='/'>Shop now</Link>
					</div>
				</Container>
				<div className='hero__overlay'></div>
				<div className='scroll-icon'>
					<Link to='#scroll' onClick={handleScrollClick}>
						<FontAwesomeIcon icon={faChevronDown} />
					</Link>
				</div>
				<div id='scroll'></div>
			</div>
		</div>
	);
}
