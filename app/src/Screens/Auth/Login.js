import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
	const [ email, setEmail ] = React.useState('');
	const [ loginsuccess, setLoginsuccess ] = React.useState(false);
	const [ password, setPassword ] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(process.env.REACT_APP_BASEURL + '/auth/login', {
				email: email.toLowerCase(),
				password: password
			})
			.then(
				(response) => {
					if (response.data.success) {
						Cookies.set('session-id', response.data['token']);
						setLoginsuccess(true);
					}
				},
				(error) => {
					alert('something went wrong');
					console.log(error);
				}
			);
	};
	if (loginsuccess) {
		return <Redirect to='/dashboard' />;
	} else {
		return (
			<div className='limiter'>
				<div className='container-login100'>
					<div className='wrap-login100'>
						<div className='login100-pic js-tilt' data-tilt>
							<img src='images/img-01.png' alt='IMG' />
						</div>

						<form className='login100-form validate-form' onSubmit={handleSubmit}>
							<span className='login100-form-title'>Login Here!</span>

							<div
								className='wrap-input100 validate-input'
								data-validate='Valid email is required: ex@abc.xyz'
							>
								<input
									className='input100'
									type='text'
									name='email'
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-envelope' aria-hidden='true' />
								</span>
							</div>

							<div
								className='wrap-input100 validate-input'
								data-validate='Password is required'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							>
								<input className='input100' type='password' name='pass' placeholder='Password' />
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-lock' aria-hidden='true' />
								</span>
							</div>

							<div className='container-login100-form-btn'>
								<button className='login100-form-btn'>Login</button>
							</div>
							<div className='text-center p-t-80'>
								<Link className='txt2' to='/signup'>
									Create your Account
									<i className='fa fa-long-arrow-right m-l-5' aria-hidden='true' />
								</Link>
							</div>
							<div className='text-center p-t-12'>
								<span className='txt1'>Forgot </span>
								<Link className='txt2' to='!#'>
									Username / Password?
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default Login;
