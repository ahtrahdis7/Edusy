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
				<Navbar></Navbar>
				<section class="hero-wrap hero-wrap-2" style={{backgroundImage:'url(images/bg_2.jpg)'}}>
				<div class="overlay"></div>
				<div class="container">
					<div class="row no-gutters slider-text align-items-center justify-content-center">
					<div class="col-md-9 ftco-animate text-center">
						<h1 class="mb-2 bread">Contact Us</h1>
						<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact <i class="ion-ios-arrow-forward"></i></span></p>
					</div>
					</div>
				</div>
				</section>
				<section className='ftco-section contact-section' style={{backgroundColor: "white"}}>
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
			<Footer></Footer>
		</div>
		);
	}
}

export default Contact;
