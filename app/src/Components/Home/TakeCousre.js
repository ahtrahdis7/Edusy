import React from 'react';
import { Link } from 'react-router-dom';

const TakeCourse = () => {
	return (
		<section
			className='ftco-intro'
			style={{ backgroundImage: 'url(images/bg_10.jpg)' }}
			data-stellar-background-ratio='0.5'
		>
			<div className='overlay' />
			<div className='container'>
				<div className='row'>
					<div className='col-md-9 m-t-120'>
						<h2>Teaching Your Child Some Good Manners</h2>
						<p className='mb-0'>
							A small river named Duden flows by their place and supplies it with the necessary
							regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
							mouth.
						</p>
					</div>
					<div className='col-md-3 d-flex align-items-center m-t-120'>
						<p className='mb-0'>
							<Link to='signup' className='btn btn-secondary px-4 py-3'>
								Take a Course
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default TakeCourse;
