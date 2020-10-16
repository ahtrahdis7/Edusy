import React from 'react';
import Footer from '../Components/Footer';
import OurFeature from '../Components/Home/OurFeature';
import ParentSay from '../Components/Home/ParentSay';
import Slider from '../Components/Home/Slider';
import TakeCourse from '../Components/Home/TakeCousre';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {}

	render () {
		return (
			<div>
				<Slider />
				<OurFeature />
				<TakeCourse />
				<ParentSay />
				<Footer />
			</div>
		);
	}
}

export default Home;
