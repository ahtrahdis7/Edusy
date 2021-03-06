import React from 'react';
import Sidebar from '../Components/Sidebar';

class NoticeBoard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			notice: []
		};
	}

	componentDidMount () {
		fetch('http://localhost:5000/feature/notice')
			.then((response) => response.json())
			// .then((data) => console.log(data))
			.then((data) => {
				// console.log(data)
				this.setState({ notice: data.notice })
			});
	}
	render () {
		const notices = this.state.notice;
		const shownotice = notices.map((noticedetails) => {
				// console.log(noticedetails);
				if (noticedetails) {
					return (
						<div className='alert alert-info alert-with-icon' data-notify='container'>
							<span data-notify='icon' className='fa fa-bell-o' />
							<span data-notify='message'>{noticedetails.notice}</span>
						</div>
					);
				} else {
					return <div></div>;
				}
			});
		
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
									Notice Board
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
											{/* <b className='caret d-none d-lg-block d-xl-block' /> */}
											<p className='d-lg-none'>Log out</p>
										</a>
										<ul className='dropdown-menu dropdown-navbar'>
											<li className='nav-link'>
												<a href='./user.html' className='nav-item dropdown-item'>
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
					<div
						className='modal modal-search fade'
						id='searchModal'
						tabindex='-1'
						role='dialog'
						aria-labelledby='searchModal'
						aria-hidden='true'
					>
						<div className='modal-dialog' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<input
										type='text'
										className='form-control'
										id='inlineFormInputGroup'
										placeholder='SEARCH'
									/>
									<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
										<i className='tim-icons icon-simple-remove' />
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- End Navbar --> */}
					<div className='content'>
						<div className='row'>
							<div className='col-12'>
								<div className='card'>
									<div className='card-header'>
										<h4 className='card-title'>Notice Board</h4>
									</div>
									<div className='card-body'>{shownotice}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NoticeBoard;
