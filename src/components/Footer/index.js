import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomerCare from './CustomerCare';
import About from './About';
import Newsletter from './Newsletter';
import Secondary from './Secondary';
import './styles.scss';

export default function index() {
	return (
		<footer className='main-footer'>
			<Container fluid='lg'>
				<Row>
					<Col xs={12} md={4}>
						<CustomerCare />
					</Col>
					<Col xs={12} md={4}>
						<About />
					</Col>
					<Col xs={12} md={4}>
						<Newsletter />
					</Col>
					<Col xs={12}>
						<Secondary />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
