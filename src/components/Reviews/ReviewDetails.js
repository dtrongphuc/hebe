import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from '../../assets/img/Reviews/157033874_448456089639541_2717178544976551486_n.jpg';

export default function ReviewDetails({ toggleDetail }) {
	return (
		<div id='#1-instafeed' className='review__details'>
			<div className='review__details-main'>
				<div className='review__details-main--left'>
					<img src={Image} alt='' className='review__details-img' />
				</div>
				<div className='review__details-main--right'>
					<div className='rv__header'>
						<div className='rv__header-avatar'></div>
						<div className='rv__header-info'>
							<p className='rv__header-name'>hebeboutique</p>
							<p className='rv__header-tag'>@hebeboutique</p>
						</div>
					</div>
					<div className='rv__description'>
						<div className='rv__control'>
							<Link to='#'>&#8249;</Link>
							<Link to='#'>&#8250;</Link>
						</div>
						<div className='rv__caption'>
							Weekend ready in @remain____ 🤍💫 I confess I have a
							big soft spot for khaki green, for me it’s that
							colour that brings out my green eyes 👀😽 What is
							your fave autumnal tone? 📸 The brand new Scene
							Trench 📸 My summer go-to, the Yasmin cotton tiered
							maxi skirt
						</div>
					</div>
					<div className='rv__bottom'>
						<span className='rv__date'>5 THÁNG 3</span>
						<span className='rv__view-on'>View on Instagram</span>
					</div>
				</div>
				<div className='review__close' onClick={toggleDetail}>
					<FontAwesomeIcon icon={faTimes} />
				</div>
			</div>
			<div className='review__modal'></div>
		</div>
	);
}
