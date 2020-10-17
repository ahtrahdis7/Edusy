import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='ftco-footer ftco-bg-dark ftco-section'>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-md-6 col-lg-4'>
						<div className='ftco-footer-widget mb-5'>
							<h2 className='ftco-heading-2'>Have a Questions?</h2>
							<div className='block-23 mb-3'>
								<ul>
									<li>
										<span className='icon icon-map-marker' />
										<span className='text'>
											203 Fake St. Mountain View, San Francisco, California, USA
										</span>
									</li>
									<li>
										<Link to='!#'>
											<span className='icon icon-phone' />
											<span className='text'>+2 392 3929 210</span>
										</Link>
									</li>
									<li>
										<Link to='!#'>
											<span className='icon icon-envelope' />
											<span className='text'>info@yourdomain.com</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-4'>
						<div className='ftco-footer-widget mb-5 ml-md-4'>
							<h2 className='ftco-heading-2'>Links</h2>
							<ul className='list-unstyled'>
								<li>
									<Link to='/'>
										<span className='ion-ios-arrow-round-forward mr-2' />Home
									</Link>
								</li>
								<li>
									<Link to='/about'>
										<span className='ion-ios-arrow-round-forward mr-2' />About
									</Link>
								</li>
								<li>
									<Link to='/contact'>
										<span className='ion-ios-arrow-round-forward mr-2' />Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-6 col-lg-4'>
						<div className='ftco-footer-widget mb-5'>
							<h2 className='ftco-heading-2'>Subscribe Us!</h2>
							<form action='#' className='subscribe-form'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control mb-2 text-center'
										placeholder='Enter email address'
									/>
									<input type='submit' value='Subscribe' className='form-control submit px-3' />
								</div>
							</form>
						</div>
						<div className='ftco-footer-widget mb-5'>
							<h2 className='ftco-heading-2 mb-0'>Connect With Us</h2>
							<ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-3'>
								<li>
									<Link to='!#'>
										<span className='icon-twitter' />
									</Link>
								</li>
								<li>
									<Link to='!#'>
										<span className='icon-facebook' />
									</Link>
								</li>
								<li>
									<Link to='!#'>
										<span className='icon-instagram' />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
