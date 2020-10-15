import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './Main';

class App extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render(){
        return (
            // <Provider>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            // </Provider>
        );
    }
}

export default App;
