import React from 'react';
import { Link } from 'react-router-dom';

class StudentDetails extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div class='limiter'>
				<div class='container-login100'>
					<div class='wrap-login100'>
						<div class='login100-pic js-tilt p-t-30' data-tilt>
							<img src='images/img-01.png' alt='IMG' />
						</div>

						<form class='login100-form validate-form'>
							<span class='login100-form-title'>Welcome Student !</span>

							<div class='wrap-input100 validate-input' data-validate='Name is required'>
								<select
									class='input100'
									name='institute_name'
									id='institute_name'
									style={{ border: 'none', color: 'grey' }}
								>
									<option selected='selected'>Enter your Institute Name</option>
									<option value='IIIT_BH'>IIIT Bhubaneswar</option>
									<option value='IIT_BH'>IIt BHU</option>
									<option value='sai'>SAI INTERNATIONAL</option>
									<option value='dav'>DAV PUBLIC SCHOOL</option>
								</select>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-university' aria-hidden='true' />
								</span>
							</div>
							<div class='wrap-input100 validate-input' data-validate='Name is required'>
								<input
									class='input100'
									type='text'
									name='email'
									placeholder='Enter Student Id'
									required='required'
								/>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-user' aria-hidden='true' />
								</span>
							</div>
							<div class='wrap-input100 validate-input' data-validate='Name is required'>
								<input
									class='input100'
									type='text'
									name='email'
									placeholder='Enter Class'
									required='required'
								/>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-user' aria-hidden='true' />
								</span>
							</div>

							<div
								class='wrap-input100 validate-input'
								data-validate='Valid email is required: ex@abc.xyz'
							>
								<input
									class='input100'
									type='file'
									name='email'
									placeholder='Upload Student Id'
									style={{ paddingTop: '12px' }}
								/>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-file' aria-hidden='true' />
								</span>
							</div>

							<div class='container-login100-form-btn'>
								<button class='login100-form-btn'>Register</button>
							</div>

							<div class='text-center p-t-50'>
								<a class='txt2' href='login.html'>
									Already have an account! Login Here!
									<i class='fa fa-long-arrow-right m-l-5' aria-hidden='true' />
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentDetails;
