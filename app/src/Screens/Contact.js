import React from 'react';

class Contact extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div>
				<section className='ftco-section contact-section'>
					<div className='container'>
						<div className='row d-flex mb-5 contact-info'>
							<div className='col-md-3 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Address</h3>
									<p>198 West 21th Street, Suite 721 New York NY 10016</p>
								</div>
							</div>
							<div className='col-md-3 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Contact Number</h3>
									<p>
										<a href='tel://1234567920'>+ 1235 2355 98</a>
									</p>
								</div>
							</div>
							<div className='col-md-3 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Email Address</h3>
									<p>
										<a href='mailto:info@yoursite.com'>info@yoursite.com</a>
									</p>
								</div>
							</div>
							<div className='col-md-3 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Website</h3>
									<p>
										<a href='#'>yoursite.com</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='ftco-section ftco-no-pt ftco-no-pb contact-section'>
					<div className='container'>
						<div className='row d-flex align-items-stretch no-gutters'>
							<div className='col-md-6 p-4 p-md-5 order-md-last bg-light'>
								<form action='#'>
									<div className='form-group'>
										<input type='text' className='form-control' placeholder='Your Name' />
									</div>
									<div className='form-group'>
										<input type='text' className='form-control' placeholder='Your Email' />
									</div>
									<div className='form-group'>
										<input type='text' className='form-control' placeholder='Subject' />
									</div>
									<div className='form-group'>
										<textarea
											name=''
											id=''
											cols='30'
											rows='7'
											className='form-control'
											placeholder='Message'
										/>
									</div>
									<div className='form-group'>
										<input
											type='submit'
											value='Send Message'
											className='btn btn-primary py-3 px-5'
										/>
									</div>
								</form>
							</div>
							<div className='col-md-6 d-flex align-items-stretch'>
								<div id='map' />
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Contact;
