import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<nav className='navbar navbar-fixed navbar-expand-lg'>
				<div className='container d-flex align-items-center'>
					<Link className='nav-item' to='/' style={{ color: 'White', fontSize: '1.5em' }}>
						Edusy
					</Link>
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
								<Link to='/' className='nav-link pl-0'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/dashboard' className='nav-link'>
									Dashboard
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact' className='nav-link'>
									Contact Us
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/login' className='nav-link'>
									Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Home;
