import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import Assignments from './Screens/Assignments';
import Dashboard from './Screens/Dashboard';
import NoticeBoard from './Screens/NoticeBoard';
import Landing from './Screens/Landing';
import DiscussionRoom from './Screens/DiscussionRoom';
import SubjectRoom from './Screens/SubjectRoom';
import Schedule from './Screens/Schedule';
import Admin from './Screens/Users/Admin';
import TeacherProfile from './Screens/Users/TeacherProfile';
import ParentProfile from './Screens/Users/ParentProfile';
import StudentProfile from './Screens/Users/StudentProfile';
import Login from './Screens/Auth/Login';
import Signup from './Screens/Auth/Signup';
import About from './Screens/About';
import Contact from './Screens/Contact';

// DO NOT REMOVE THESE, THESE WILL BE CONFIGURED LATER

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({});

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	componentDidMount () {}

	render () {
		return (
			<div>
				{/* <Navbar /> */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/landing' component={Landing} />
					<Route exact path='/student' component={StudentProfile} />
					<Route exact path='/teacher' component={TeacherProfile} />
					<Route exact path='/parent' component={ParentProfile} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/noticeboard' component={NoticeBoard} />
					<Route exact path='/assignments' component={Assignments} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/subject' component={SubjectRoom} />
					<Route exact path='/discussion' component={DiscussionRoom} />
					<Route exact path='/schedule' component={Schedule} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					{/* <Route exact path='/school' component={School} /> */}
					<Route exact path='/admin' component={Admin} />
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default Main;
