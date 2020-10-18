import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

class Contact extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div>
				<Navbar />
				<section class='hero-wrap hero-wrap-2' style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
					<div class='overlay' />
					<div class='container'>
						<div class='row no-gutters slider-text align-items-center justify-content-center'>
							<div class='col-md-9 text-center'>
								<h1 class='mb-2 bread'>Contact Us</h1>
								<p class='breadcrumbs'>
									<span class='mr-2'>
										<a href='index.html'>
											Home <i class='ion-ios-arrow-forward' />
										</a>
									</span>
									<span>
										Contact <i class='ion-ios-arrow-forward' />
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='ftco-section contact-section' style={{ backgroundColor: 'white' }}>
					<div className='container'>
						<div className='row d-flex mb-5 contact-info'>
							<div className='col-md-4 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Address</h3>
									<p>
										<a>Bhubaneswar,Odisha</a>
									</p>
								</div>
							</div>
							<div className='col-md-4 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Contact Number</h3>
									<p>
										<a href='tel://9876543210'>+91 9876543210</a>
									</p>
								</div>
							</div>
							<div className='col-md-4 d-flex'>
								<div className='bg-light align-self-stretch box p-4 text-center'>
									<h3 className='mb-4'>Email Address</h3>
									<p>
										<a href='mailto:info@yoursite.com'>info@learn.com</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default Contact;
