import React from 'react';

const Achievements = () => {
	return (
		<section
			className='ftco-section ftco-counter img'
			id='section-counter'
			style={{ backgroundImage: 'url(images/bg_4.jpg)' }}
			data-stellar-background-ratio='0.5'
		>
			<div className='container'>
				<div className='row justify-content-center mb-5 pb-2'>
					<div className='col-md-8 text-center heading-section heading-section-black ftco-animate'>
						<h2 className='mb-4'>
							<span>20 Years of</span> Experience
						</h2>
						<p>
							Separated they live in. A small river named Duden flows by their place and supplies it with
							the necessary regelialia. It is a paradisematic country
						</p>
					</div>
				</div>
				<div className='row d-md-flex align-items-center justify-content-center'>
					<div className='col-lg-10'>
						<div className='row d-md-flex align-items-center'>
							<div className='col-md d-flex justify-content-center counter-wrap ftco-animate'>
								<div className='block-18'>
									<div className='icon'>
										<span className='flaticon-doctor' />
									</div>
									<div className='text'>
										<strong className='number' data-number='18'>
											0
										</strong>
										<span>Certified Teachers</span>
									</div>
								</div>
							</div>
							<div className='col-md d-flex justify-content-center counter-wrap ftco-animate'>
								<div className='block-18'>
									<div className='icon'>
										<span className='flaticon-doctor' />
									</div>
									<div className='text'>
										<strong className='number' data-number='351'>
											0
										</strong>
										<span>Successful Kids</span>
									</div>
								</div>
							</div>
							<div className='col-md d-flex justify-content-center counter-wrap ftco-animate'>
								<div className='block-18'>
									<div className='icon'>
										<span className='flaticon-doctor' />
									</div>
									<div className='text'>
										<strong className='number' data-number='564'>
											0
										</strong>
										<span>Happy Parents</span>
									</div>
								</div>
							</div>
							<div className='col-md d-flex justify-content-center counter-wrap ftco-animate'>
								<div className='block-18'>
									<div className='icon'>
										<span className='flaticon-doctor' />
									</div>
									<div className='text'>
										<strong className='number' data-number='300'>
											0
										</strong>
										<span>Awards Won</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Achievements;
