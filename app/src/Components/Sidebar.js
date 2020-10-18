import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<ul className='nav'>
					<li>
						<Link to='/classes'>
							<i className='fa fa-pie-chart' />
							<p>Classes</p>
						</Link>
					</li>
					<li>
						<Link to='/noticeboard'>
							<i className='fa fa-bell-o' />
							<p>Noticeboard</p>
						</Link>
					</li>
					<li>
						<Link to='/dashboard'>
							<i className='fa fa-book' />
							<p>Statistics</p>
						</Link>
					</li>
					<li>
						<Link to='/student'>
							<i className='fa fa-user' />
							<p>User Profile</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Sidebar;
