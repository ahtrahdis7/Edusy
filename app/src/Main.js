import React , { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Screens/Home'
import Navbar from './Components/Navbar'

// DO NOT REMOVE THESE, THESE WILL BE CONFIGURED LATER

const mapStateToProps = (state) => {
	
};

const mapDispatchToProps = (dispatch) => ({
	
});

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default Main;