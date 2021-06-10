import React from 'react';
import Input from 'components/AuthForm/Input';
import Shop from 'layouts/Shop';
import './styles.scss';
// import PropTypes from 'prop-types'

function Login(props) {
	return (
		<Shop>
			<div className='container'>
				<div className='row'>
					<div className='col-0 col-md-4'></div>
					<div className='col-12 col-md-4'>
						<section className='auth-container'>
							<h3 className='auth-title'>Login</h3>
							<form action='' className='auth-form'>
								<Input type='email' placeholder='Email' />
								<Input type='password' placeholder='Password' />
							</form>
						</section>
					</div>
					<div className='col-0 col-md-4'></div>
				</div>
			</div>
		</Shop>
	);
}

// Login.propTypes = {

// }

export default Login;
