import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.scss';

export default function Hero({ title, background, heroText }) {
	return (
		<div className='collection__hero'>
			<div
				className='collection__hero__wrapper'
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className='collection__hero__content'>
					<Container fluid='lg' className='hero__content__grid'>
						<h1 className='hero__content__heading'>{title}</h1>
						<div className='hero__content__text'>
							{heroText &&
								heroText.map((text, index) => (
									<p key={`heroText-${index}`}>{text}</p>
								))}
						</div>
					</Container>
				</div>
				<div className='collection__hero__overlay'></div>
			</div>
		</div>
	);
}
