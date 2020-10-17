import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div className='limiter'>
				<div className='container-login100'>
					<div className='wrap-login100'>
						<div className='login100-pic js-tilt p-t-100' data-tilt>
							<img src='images/img-01.png' alt='IMG' />
						</div>

						<form className='login100-form validate-form' action='inter.html'>
							<span className='login100-form-title' style={{ fontWeight: 'bolder', fontSize: '40px' }}>
								Register Here!
							</span>
							<div className='wrap-input100 validate-input' data-validate='Name is required'>
								<input
									className='input100'
									type='text'
									name='email'
									placeholder='Enter Name'
									required='required'
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-user' aria-hidden='true' />
								</span>
							</div>

							<div
								className='wrap-input100 validate-input'
								data-validate='Valid email is required: ex@abc.xyz'
							>
								<input
									className='input100'
									type='text'
									name='email'
									placeholder='Email'
									required='required'
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-envelope' aria-hidden='true' />
								</span>
							</div>

							<div className='wrap-input100 validate-input' data-validate='Password is required'>
								<input
									className='input100'
									type='password'
									name='pass'
									placeholder='Password'
									required='required'
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-lock' aria-hidden='true' />
								</span>
							</div>
							<div className='wrap-input100 validate-input' data-validate='Confirm Password is required'>
								<input
									className='input100'
									type='password'
									name='conpass'
									placeholder='Confirm Password'
									required='required'
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-lock' aria-hidden='true' />
								</span>
							</div>
							<div class='wrap-input100 validate-input' data-validate='Category is required'>
								<select
									class='input100'
									name='institute_name'
									id='institute_name'
									style={{ border: 'none', color: 'grey' }}
								>
									<option selected='selected'>Who Are You?</option>
									<option value='student'>Student</option>
									<option value='Teacher'>Teacher</option>
								</select>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-university' aria-hidden='true' />
								</span>
							</div>
							<div
								className='wrap-input100 validate-input'
								data-validate='Valid email is required: ex@abc.xyz'
							>
								<input
									className='input100'
									type='text'
									name='email'
									placeholder='Parent Email (Req if student)'
								/>
								<span className='focus-input100' />
								<span className='symbol-input100'>
									<i className='fa fa-envelope' aria-hidden='true' />
								</span>
							</div>
							
							<div className='container-login100-form-btn'>
								<Link to='registerstudent'>
									<button className='login100-form-btn'>Register</button>
								</Link>
							</div>
							

							<div className='text-center p-t-50'>
								<Link className='txt2' to='/login'>
									Already have an account! Login Here!
									<i className='fa fa-long-arrow-right m-l-5' aria-hidden='true' />
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
