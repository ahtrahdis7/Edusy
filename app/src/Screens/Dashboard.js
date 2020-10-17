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
							<div className='col-lg-6 col-md-12'>
								<div className='card card-tasks'>
									<div className='card-header'>
										<h6 className='title d-inline'>Tasks(5)</h6>
										<p className='card-category d-inline'>today</p>
										<div className='dropdown'>
											<button
												type='button'
												className='btn btn-link dropdown-toggle btn-icon'
												data-toggle='dropdown'
											>
												<i className='tim-icons icon-settings-gear-63' />
											</button>
											<div
												className='dropdown-menu dropdown-menu-right'
												aria-labelledby='dropdownMenuLink'
											>
												<a className='dropdown-item' href='#pablo'>
													Action
												</a>
												<a className='dropdown-item' href='#pablo'>
													Another action
												</a>
												<a className='dropdown-item' href='#pablo'>
													Something else
												</a>
											</div>
										</div>
									</div>
									<div className='card-body'>
										<div className='table-full-width table-responsive'>
											<table className='table'>
												<tbody>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>Update the Documentation</p>
															<p className='text-muted'>
																Dwuamish Head, Seattle, WA 8:47 AM
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>GDPR Compliance</p>
															<p className='text-muted'>
																The GDPR is a regulation that requires businesses to
																protect the personal data and privacy of Europe citizens
																for transactions that occur within EU member states.
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>Solve the issues</p>
															<p className='text-muted'>
																Fifty percent of all respondents said they would be more
																likely to shop at a company
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>Release v2.0.0</p>
															<p className='text-muted'>
																Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>Export the processed files</p>
															<p className='text-muted'>
																The report also shows that consumers will not easily
																forgive a company once a breach exposing their personal
																data occurs.
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className='form-check'>
																<label className='form-check-label'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																	/>
																	<span className='form-check-sign'>
																		<span className='check' />
																	</span>
																</label>
															</div>
														</td>
														<td>
															<p className='title'>Arival at export process</p>
															<p className='text-muted'>
																Capitol Hill, Seattle, WA 12:34 AM
															</p>
														</td>
														<td className='td-actions text-right'>
															<button
																type='button'
																rel='tooltip'
																title=''
																className='btn btn-link'
																data-original-title='Edit Task'
															>
																<i className='tim-icons icon-pencil' />
															</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6 col-md-12'>
								<div className='card'>
									<div className='card-header'>
										<h4 className='card-title'>Simple Table</h4>
									</div>
									<div className='card-body'>
										<div className='table-responsive'>
											<table className='table tablesorter' id=''>
												<thead className='text-primary'>
													<tr>
														<th>Name</th>
														<th>Country</th>
														<th>City</th>
														<th className='text-center'>Salary</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Dakota Rice</td>
														<td>Niger</td>
														<td>Oud-Turnhout</td>
														<td className='text-center'>$36,738</td>
													</tr>
													<tr>
														<td>Minerva Hooper</td>
														<td>Curaçao</td>
														<td>Sinaai-Waas</td>
														<td className='text-center'>$23,789</td>
													</tr>
													<tr>
														<td>Sage Rodriguez</td>
														<td>Netherlands</td>
														<td>Baileux</td>
														<td className='text-center'>$56,142</td>
													</tr>
													<tr>
														<td>Philip Chaney</td>
														<td>Korea, South</td>
														<td>Overland Park</td>
														<td className='text-center'>$38,735</td>
													</tr>
													<tr>
														<td>Doris Greene</td>
														<td>Malawi</td>
														<td>Feldkirchen in Kärnten</td>
														<td className='text-center'>$63,542</td>
													</tr>
													<tr>
														<td>Mason Porter</td>
														<td>Chile</td>
														<td>Gloucester</td>
														<td className='text-center'>$78,615</td>
													</tr>
													<tr>
														<td>Jon Porter</td>
														<td>Portugal</td>
														<td>Gloucester</td>
														<td className='text-center'>$98,615</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer className='footer'>
						<div className='container-fluid'>
							<ul className='nav'>
								<li className='nav-item'>
									<a href='javascript:void(0)' className='nav-link'>
										{' '}
										Creative Tim{' '}
									</a>
								</li>
								<li className='nav-item'>
									<a href='javascript:void(0)' className='nav-link'>
										{' '}
										About Us{' '}
									</a>
								</li>
								<li className='nav-item'>
									<a href='javascript:void(0)' className='nav-link'>
										{' '}
										Blog{' '}
									</a>
								</li>
							</ul>
							<div className='copyright'>
								©
								<script>document.write(new Date().getFullYear());</script>
								2018 made with <i className='tim-icons icon-heart-2' /> by
								<a href='javascript:void(0)' target='_blank'>
									Creative Tim
								</a>
								for a better web.
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Dashboard;
