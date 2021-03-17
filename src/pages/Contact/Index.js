import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.scss';
import { Container } from 'react-bootstrap';

export default function Index() {
	return (
		<>
			<Header />
			<Container fluid='lg'>
				<section className='contact'>
					<h2 className='contact__heading'>Contact Us</h2>
					<div className='contact__content'>
						<p className='contact__content__info'>
							Hebe Boutique <br /> 450 Queen Street,
							<br /> Kuripuni, Masterton 5810
						</p>
						<p className='contact__content__info'>
							+64 (6) 378 8924
							<br />
							<a href='mailto:shop@hebeboutique.com'>
								hellothere@hebeboutique.com
							</a>
						</p>
						<p className='contact__content__info'>
							Mon - Fri 10am - 4:30pm <br />
							Sat 10am - 3pm
							<br />
							Sun CLOSED
						</p>

						<div className='contact__content__description'>
							<p>
								If you have a query regarding an element of our
								website whether it be about processing or an
								aspect of your order, our in-store team would
								love to assist you. Don't hesitate to contact us
								on the following email, or call the store
								between our working hours. We also channel
								feedback through our Facebook Page and
								Instagram. We will aim to reply to your query
								within 24 working hours. For all product and
								order enquiries please email:
								<br />
								<a href='mailto:hellothere@hebeboutique.com'>
									hellothere@hebeboutique.com
								</a>
							</p>
							<p>
								To all designers wishing to contact the store
								with wholesale enquiries, please contact
								Danielle Burkhart:{' '}
								<a href='mailto:shop@hebeboutique.com'>
									shop@hebeboutique.com
								</a>{' '}
								If we feel as though your brand would fit within
								our portfolio, we will get in touch!
							</p>
							<p>
								For all retailers, or media and press wishing to
								express interest in self-designed label My
								Boyfriends Back, enquiries can be directed to{' '}
								<br /> Danielle Burkhart:{' '}
								<a href='mailto:theheart@myboyfriendsback.co.nz'>
									theheart@myboyfriendsback.co.nz
								</a>
							</p>
							<b>Follow us @hebeboutique xx</b>
							<p>
								Our team at Hebe are always interested in your
								feedback to do with your physical and online
								shopping experience and our services. You can
								forward your comments to the supplied emails or
								find us on Facebook!
							</p>
							<p>
								Thank you so much for supporting your local, as
								well as NZ designers and brands! x
							</p>
						</div>
					</div>
				</section>
			</Container>
			<Footer />
		</>
	);
}
