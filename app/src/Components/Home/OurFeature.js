import React from 'react';

const OurFeature = () => {
	return (
		<section className='ftco-services ftco-no-pb'>
			<div className='container-wrap'>
				<div className='row no-gutters'>
					<div className='col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary'>
						<div className='media block-6 d-block text-center'>
							<div className='icon d-flex justify-content-center align-items-center'>
								<span className='flaticon-teacher' />
							</div>
							<div className='media-body p-2 mt-3'>
								<h3 className='heading'>Assignments, Quizzes, Projects, Tests</h3>
								<p>
									Teachers can easily share subject specific assignments, grades and comments with
									students and parents. The students will be notified about due assignments.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary'>
						<div className='media block-6 d-block text-center'>
							<div className='icon d-flex justify-content-center align-items-center'>
								<span className='flaticon-reading' />
							</div>
							<div className='media-body p-2 mt-3'>
								<h3 className='heading'>Discussion Forums</h3>
								<p>
									Not only doubts will be clarified by Teachers but you will be getting a 24*7 active
									community of students to discuss topics and clarify doubts among yourself.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth'>
						<div className='media block-6 d-block text-center'>
							<div className='icon d-flex justify-content-center align-items-center'>
								<span className='flaticon-books' />
							</div>
							<div className='media-body p-2 mt-3'>
								<h3 className='heading'>Trusted &amp; Free Resources</h3>
								<p>
									Required resources like video lectures or book chapters can be shared by the
									Teachers.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary'>
						<div className='media block-6 d-block text-center'>
							<div className='icon d-flex justify-content-center align-items-center'>
								<span className='flaticon-diploma' />
							</div>
							<div className='media-body p-2 mt-3'>
								<h3 className='heading'>Constant Performance Evaluation</h3>
								<p>
									Constant check on progress including data from attendance, exams, assignments or
									teacher input made by students which is accessible by Parents and Teachers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default OurFeature;
