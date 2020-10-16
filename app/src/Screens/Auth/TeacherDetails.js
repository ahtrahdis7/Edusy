import React from 'react';
import { Link } from 'react-router-dom';

class TeacherDetails extends React.Component {
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
							<span class='login100-form-title'>Welcome Teacher!</span>

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
								<select
									class='input100'
									name='classes'
									id='classes'
									style={{ border: 'none', color: 'grey' }}
								>
									<option selected='selected'>Classes you teach</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
								</select>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-university' aria-hidden='true' />
								</span>
							</div>

							<div class='wrap-input100 validate-input' data-validate='Name is required'>
								<select
									class='input100'
									name='subs'
									id='subs'
									style={{ border: 'none', color: 'grey' }}
								>
									<option value='1'>Bio</option>
									<option value='2'>Math</option>
									<option value='3'>Comp</option>
									<option value='4'>SST</option>
									<option value='5'>PHY</option>
									<option value='6'>CHEM</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
									<option value='9'>9</option>
									<option value='10'>10</option>
									<option value='11'>11</option>
									<option value='12'>12</option>
								</select>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-university' aria-hidden='true' />
								</span>
							</div>

							<div class='wrap-input100 validate-input' data-validate='Id is required'>
								<input
									class='input100'
									type='text'
									name='id'
									placeholder='Teacher&#39;s ID'
									required='option'
								/>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-user' aria-hidden='true' />
								</span>
							</div>

							<div class='wrap-input100 validate-input' data-validate='Pic is required'>
								<input
									class='input100'
									type='file'
									name='file_id'
									placeholder='Upload Teacher&#39;s Id'
									style={{ paddingTop: '12px', color: 'grey' }}
									required='required'
								/>
								<span class='focus-input100' />
								<span class='symbol-input100'>
									<i class='fa fa-file' aria-hidden='true' />
								</span>
							</div>

							<div class='container-login100-form-btn'>
								<Link to='/'>
									<button class='login100-form-btn'>Register</button>
								</Link>
							</div>

							<div class='text-center p-t-50'>
								<Link class='txt2' to='/login'>
									Already have an account! Login Here!
									<i class='fa fa-long-arrow-right m-l-5' aria-hidden='true' />
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default TeacherDetails;
