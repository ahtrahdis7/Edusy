import React from 'react';
import Sidebar from '../Components/Sidebar';


class DiscussionRoom extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            discussion: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/feature/discussion')
        .then((response) => response.json())
        .then((data) => {
            this.setState({ discussion: data.discussions })
        });
    }

    render(){
        console.log(this.state)
        const discussion = this.state.discussion.map((threads) => {
            if(threads){
                return (
                    <div class="row">
                        <p>_</p>
                        <div class="col-md-12 mr-auto ml-auto">
                            <div class="form-group " >
                                <h4>{threads.thread}</h4>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return <div></div>;
            }
        });
        return(
            <div className="wrapper">
                <Sidebar />
                <div class="main-panel">
                {/*<!-- Navbar -->*/}
                <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
                    <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <div class="navbar-toggle d-inline">
                        <button type="button" class="navbar-toggler">
                            <span class="navbar-toggler-bar bar1"></span>
                            <span class="navbar-toggler-bar bar2"></span>
                            <span class="navbar-toggler-bar bar3"></span>
                        </button>
                        </div>
                        <a class="navbar-brand" href="javascript:void(0)">Discussion Forum</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navigation">
                        <ul class="navbar-nav ml-auto">
                        
                        <li class="dropdown nav-item">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                            <div class="photo">
                                <img src="../images/anime3.png" alt="Profile Photo" />
                            </div>
                            <b class="caret d-none d-lg-block d-xl-block"></b>
                            <p class="d-lg-none">
                                Log out
                            </p>
                            </a>
                            <ul class="dropdown-menu dropdown-navbar">
                            <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Profile</a></li>
                            <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a></li>
                            <li class="dropdown-divider"></li>
                            <li class="nav-link"><a href="javascript:void(0)" class="nav-item dropdown-item">Log out</a></li>
                            </ul>
                        </li>
                        <li class="separator d-lg-none"></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <div class="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <input type="text" class="form-control-c" id="inlineFormInputGroup" placeholder="SEARCH" />
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="tim-icons icon-simple-remove"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                {/*<!-- End Navbar -->*/}
                <div class="content">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                        <div class="card-header">
                            <h5 class="title">LETS DISCUSS!</h5>
                        </div>
                        <div class="card-body">
                            <form>
                            {discussion}
                            </form>
                        </div>
                        <div class="card-footer mr-auto ml-auto">
                            <button type="submit" class="btn btn-fill btn-primary-h">POST</button>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
                </div>
        )
    }
}

export default DiscussionRoom;