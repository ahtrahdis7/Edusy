import React from 'react';
import Footer from '../Components/Footer';
import Achievements from '../Components/Home/Achievement';
import OurFeature from '../Components/Home/OurFeature';
import ParentSay from '../Components/Home/ParentSay';
import Slider from '../Components/Home/Slider';
import TakeCourse from '../Components/Home/TakeCousre';
import Navbar from '../Components/Navbar';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div>
				<Navbar />
				<TakeCourse />
				<OurFeature />
				<Achievements />
				<Footer />
			</div>
		);
	}
}

export default Home;
