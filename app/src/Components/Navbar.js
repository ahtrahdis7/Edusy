import React from 'react';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light' id='ftco-navbar'>
				<div className='container d-flex align-items-center'>
					<a className='navbar-brand' href='index.html'>
						Kiddos
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#ftco-nav'
						aria-controls='ftco-nav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='oi oi-menu' /> Menu
					</button>
					<div className='collapse navbar-collapse' id='ftco-nav'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item active'>
								<a href='index.html' className='nav-link pl-0'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a href='about.html' className='nav-link'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a href='blog.html' className='nav-link'>
									Blog
								</a>
							</li>
							<li className='nav-item'>
								<a href='contact.html' className='nav-link'>
									Contact Us
								</a>
							</li>
							<li className='nav-item'>
								<a href='login.html' className='nav-link'>
									Login
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Home;
