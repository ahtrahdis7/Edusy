import React from 'react';
import Sidebar from '../Components/Sidebar';

class SubjectRoom extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div classNameName='wrapper'>
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
									classNamees
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
									<li className='search-bar input-group'>
										<button
											className='btn btn-link'
											id='search-button'
											data-toggle='modal'
											data-target='#searchModal'
										>
											<i className='tim-icons icon-zoom-split' />
											<span className='d-lg-none d-md-block'>Search</span>
										</button>
									</li>
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
							<div className='col-md-6'>
								<h2>Biology</h2>
								<h3>
									className 9<br />Bharati Mishra
								</h3>
							</div>
							<div className='col-md-6'>
								<div className='float-right'>
									<button type='button' class='btn btn-primary'>
										Assignments
									</button>
									<br />
									<button type='button' class='btn btn-primary'>
										Performance
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SubjectRoom;
