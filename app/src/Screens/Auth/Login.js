import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handlepassword = this.handlepassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (event) {
		this.setState({ email: event.target.value });
	}
	handlepassword (event) {
		this.setState({ password: event.target.value });
	}
	handleSubmit (event) {
		event.preventDefault();
		alert('login success');
	}
	componentDidMount () {}

	render () {
		return (
			<div className='limiter'>
				<div className='container-login100'>
					<div className='wrap-login100'>
						<div className='login100-pic js-tilt' data-tilt>
							<img src='images/img-01.png' alt='IMG' />
						</div>

						<form className='login100-form validate-form' onSubmit={this.handleSubmit}>
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
									value={this.state.email}
									onChange={this.handleChange}
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-envelope' aria-hidden='true' />
								</span>
							</div>

							<div
								className='wrap-input100 validate-input'
								data-validate='Password is required'
								value={this.state.email}
								onChange={this.handlepassword}
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
}

export default Login;
