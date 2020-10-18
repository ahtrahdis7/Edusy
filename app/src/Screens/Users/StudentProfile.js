import React from 'react';
import Sidebar from '../../Components/Sidebar';

class StudentProfile extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div>
				<Sidebar />
				<div className='main-panel'>
					<nav className='navbar navbar-expand-lg navbar-absolute navbar-transparent'>
						<div className='container-fluid'>
							<div className='navbar-wrapper'>
								<div className='navbar-toggle d-inline'>
									<button type='button' className='navbar-toggler'>
										<span className='navbar-toggler-bar bar1' />
										<span className='navbar-toggler-bar bar2' />
										<span className='navbar-toggler-bar bar3' />
									</button>
								</div>
								<a className='navbar-brand' href='javascript:void(0)'>
									User Profile
								</a>
							</div>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navigation'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<span className='navbar-toggler-bar navbar-kebab' />
								<span className='navbar-toggler-bar navbar-kebab' />
								<span className='navbar-toggler-bar navbar-kebab' />
							</button>
							<div className='collapse navbar-collapse' id='navigation'>
								<ul className='navbar-nav ml-auto'>
									<li className='dropdown nav-item'>
										<a href='#' className='dropdown-toggle nav-link' data-toggle='dropdown'>
											<div className='photo'>
												<img src='../images/anime3.png' alt='Profile Photo' />
											</div>
											<b className='caret d-none d-lg-block d-xl-block' />
											<p className='d-lg-none'>Log out</p>
										</a>
										<ul className='dropdown-menu dropdown-navbar'>
											<li className='nav-link'>
												<a href='javascript:void(0)' className='nav-item dropdown-item'>
													Profile
												</a>
											</li>
											<li className='nav-link'>
												<a href='javascript:void(0)' className='nav-item dropdown-item'>
													Settings
												</a>
											</li>
											<li className='dropdown-divider' />
											<li className='nav-link'>
												<a href='javascript:void(0)' className='nav-item dropdown-item'>
													Log out
												</a>
											</li>
										</ul>
									</li>
									<li className='separator d-lg-none' />
								</ul>
							</div>
						</div>
					</nav>
					<div className='content'>
						<div className='row'>
							<div className='col-md-8'>
								<div className='card'>
									<div className='card-header'>
										<h5 className='title'>Edit Profile</h5>
									</div>
									<div className='card-body'>
										<form>
											<div className='row'>
												<div className='col-md-6 pr-md-2'>
													<div className='form-group'>
														<label>Name</label>
														<input
															type='text'
															className='form-control-c'
															placeholder='name'
															value='user'
														/>
													</div>
												</div>
											</div>

											<div className='row'>
												<div className='col-md-10 pr-md-1'>
													<div className='form-group'>
														<label>school</label>
														<input
															type='text'
															className='form-control-c'
															placeholder='school'
															value='school'
														/>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-md-10 pr-md-1'>
													<div className='form-group'>
														<label for='exampleInputEmail1'>Email address</label>
														<input
															type='email'
															className='form-control-c'
															placeholder='abc@email.com'
														/>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className='card-footer'>
										<button type='submit' className='btn btn-fill btn-primary-h'>
											Save
										</button>
									</div>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='card card-user'>
									<div className='card-body'>
										<p className='card-text'>
											<div className='author'>
												<div className='block block-one' />
												<div className='block block-two' />
												<div className='block block-three' />
												<div className='block block-four' />
												<a href='javascript:void(0)'>
													<img className='avatar' src='../images/emilyz.jpg' alt='...' />
													<h5 className='title'>Swati Mallick</h5>
												</a>
												<p className='description'>Ceo/Co-Founder</p>
											</div>
										</p>
										<div className='card-description'>
											Do not be scared of the truth because we need it.
										</div>
									</div>
									<div className='card-footer'>
										<div className='button-container'>
											<button
												href='javascript:void(0)'
												className='btn btn-icon btn-round btn-facebook'
											>
												<i className='fa fa-facebook' />
											</button>
											<button
												href='javascript:void(0)'
												className='btn btn-icon btn-round btn-twitter'
											>
												<i className='fa fa-twitter' />
											</button>
											<button
												href='javascript:void(0)'
												className='btn btn-icon btn-round btn-google'
											>
												<i className='fa fa-google-plus' />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentProfile;
