import React from 'react';
import { Link } from 'react-router-dom';

class ClassesCard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div className='content'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='card'>
							<div className='card-header'>
								<div className='row'>
									<div className='col-sm-6 text-left'>
										<h2 className='card-title'>Classes</h2>
									</div>
									<div className='col-sm-6'>
										<div className='float-right'>
											<button type='button' className='btn btn-fill btn-primary'>
												+ Add class
											</button>
										</div>
									</div>
								</div>
								<div className='card-body'>
									<div className='row'>
										<div className='col-lg-12 ml-auto mr-auto'>
											<div className='row'>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>Biology</button>
												</div>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>Physics</button>
												</div>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>Chemistry</button>
												</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-12 ml-auto mr-auto'>
											<div className='row'>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>History</button>
												</div>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>Geography</button>
												</div>
												<div className='class-card col-md-4 btn mr-auto ml-auto'>
													<img
														className='avatar'
														src='https://res.cloudinary.com/saidatta/image/upload/v1602905348/emilyz_ofd2b6.jpg'
														alt='...'
													/>
													<button className='btn btn-primary btn-block'>Civics</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ClassesCard;
