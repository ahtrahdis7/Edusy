import React from 'react';
import { Link } from 'react-router-dom';
import '../Screens/css/assets/css/black-dashboard.css';
import '../Screens/css/assets/css/black-dashboard.min.css';
import '../Screens/css/assets/css/nucleo-icons.css';
import '../Screens/css/assets/demo/demo.css';
import Sidebar from '../Components/Sidebar';

class Dashboard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div className='wrapper'>
				<Sidebar />
				<div className='main-panel'>
					{/* <!-- Navbar --> */}
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
									Dashboard
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
					{/* <!-- End Navbar --> */}
					<div className='content'>
						<div className='row'>
							<div className='col-lg-12 col-md-12'>
								<div className='card card-tasks'>
									<div className='card-header' style={{ textAlign: 'center', marginTop: '10%' }}>
										<h1 className='title d-inline'>Statistics</h1>
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

export default Dashboard;
