import React from 'react';

const Footer = () => {
	return (
		<footer className='ftco-footer ftco-bg-dark ftco-section'>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-md-6 col-lg-3'>
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
										<a href='#'>
											<span className='icon icon-phone' />
											<span className='text'>+2 392 3929 210</span>
										</a>
									</li>
									<li>
										<a href='#'>
											<span className='icon icon-envelope' />
											<span className='text'>info@yourdomain.com</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-3'>
						<div className='ftco-footer-widget mb-5'>
							<h2 className='ftco-heading-2'>Recent Blog</h2>
							<div className='block-21 mb-4 d-flex'>
								<a className='blog-img mr-4' style={{ backgroundImage: 'url(images/image_1.jpg)' }} />
								<div className='text'>
									<h3 className='heading'>
										<a href='#'>Even the all-powerful Pointing has no control about</a>
									</h3>
									<div className='meta'>
										<div>
											<a href='#'>
												<span className='icon-calendar' /> Dec 25, 2018
											</a>
										</div>
										<div>
											<a href='#'>
												<span className='icon-person' /> Admin
											</a>
										</div>
										<div>
											<a href='#'>
												<span className='icon-chat' /> 19
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='block-21 mb-5 d-flex'>
								<a className='blog-img mr-4' style={{ backgroundImage: 'url(images/image_2.jpg)' }} />
								<div className='text'>
									<h3 className='heading'>
										<a href='#'>Even the all-powerful Pointing has no control about</a>
									</h3>
									<div className='meta'>
										<div>
											<a href='#'>
												<span className='icon-calendar' /> Dec 25, 2018
											</a>
										</div>
										<div>
											<a href='#'>
												<span className='icon-person' /> Admin
											</a>
										</div>
										<div>
											<a href='#'>
												<span className='icon-chat' /> 19
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-3'>
						<div className='ftco-footer-widget mb-5 ml-md-4'>
							<h2 className='ftco-heading-2'>Links</h2>
							<ul className='list-unstyled'>
								<li>
									<a href='#'>
										<span className='ion-ios-arrow-round-forward mr-2' />Home
									</a>
								</li>
								<li>
									<a href='#'>
										<span className='ion-ios-arrow-round-forward mr-2' />About
									</a>
								</li>
								<li>
									<a href='#'>
										<span className='ion-ios-arrow-round-forward mr-2' />Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-6 col-lg-3'>
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
								<li className='ftco-animate'>
									<a href='#'>
										<span className='icon-twitter' />
									</a>
								</li>
								<li className='ftco-animate'>
									<a href='#'>
										<span className='icon-facebook' />
									</a>
								</li>
								<li className='ftco-animate'>
									<a href='#'>
										<span className='icon-instagram' />
									</a>
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
