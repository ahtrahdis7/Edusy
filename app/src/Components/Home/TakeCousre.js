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
						<h2 style={{fontSize:"30px", color: "white"}}>EDUCATION MADE EASIER!!</h2>
						<p className='mb-0' style={{fontSize:"16px", color: "black"}}>
						We have been able to work closely to create an online school management system that is perfect for us, that meets all of our needs and has so much potential to get better and better as we grow and change in the coming years.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default TakeCourse;
