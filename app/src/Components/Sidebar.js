import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<ul className='nav'>
					<li className='active'>
						<Link to='/dashboard'>
							<i className='tim-icons icon-chart-pie-36' />
							<p>Dashboard</p>
						</Link>
					</li>
					<li>
						<Link to='/noticeboard'>
							<i className='tim-icons icon-world' />
							<p>noticeboard</p>
						</Link>
					</li>
					<li>
						<Link to='/classes'>
							<i className='tim-icons icon-notes' />
							<p>Classes</p>
						</Link>
					</li>
					<li>
						<Link to='/student'>
							<i className='tim-icons icon-single-02' />
							<p>User Profile</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Sidebar;
