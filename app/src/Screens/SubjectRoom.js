import React from 'react';
import Sidebar from '../Components/Sidebar';


class SubjectRoom extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){

        return(
            <div classNameName="wrapper">
            <Sidebar />
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
                    <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle d-inline">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                        </div>
                        <a className="navbar-brand" href="javascript:void(0)">classNamees</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav ml-auto">
                        <li className="search-bar input-group">
                            <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" ></i>
                            <span className="d-lg-none d-md-block">Search</span>
                            </button>
                        </li>
                        <li className="dropdown nav-item">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                            <div className="photo">
                                <img src="../images/anime3.png" alt="Profile Photo" />
                            </div>
                            <b className="caret d-none d-lg-block d-xl-block"></b>
                            <p className="d-lg-none">
                                Log out
                            </p>
                            </a>
                            <ul className="dropdown-menu dropdown-navbar">
                            <li className="nav-link"><a href="javascript:void(0)" className="nav-item dropdown-item">Profile</a></li>
                            <li className="nav-link"><a href="javascript:void(0)" className="nav-item dropdown-item">Settings</a></li>
                            <li className="dropdown-divider"></li>
                            <li className="nav-link"><a href="javascript:void(0)" className="nav-item dropdown-item">Log out</a></li>
                            </ul>
                            </li>
                            <li className="separator d-lg-none"></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <div className="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="tim-icons icon-simple-remove"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                    <div classNameName="col-md-12">
                        <div classNameName="card">
                        <div classNameName="card-header">
                            <div classNameName="card-body">
                            <div classNameName="row">
                                <div classNameName="col-lg-12 ml-auto mr-auto">
                                <div classNameName="row">
                                    <div classNameName="class-stu-card col-lg-12 btn mr-auto ml-auto">
                                    <img style="float: right;" 
                                        className="avatar"
                                        src="../images/emilyz.jpg"
                                        alt="..."
                                    />
                                    <div style="float: left;">
                                        <h2>Biology</h2>
                                        <h3>className 9<br />Bharati Mishra</h3>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 ml-auto mr-auto">
                                <div className="row">
                                    <div className="class-card-add col-md-6 btn mr-auto ml-auto">
                                    <button className="btn btn-primary btn-block">
                                        Assignments
                                    </button>
                                    </div>
                                    <div className="class-card-add col-md-6 btn mr-auto ml-auto">
                                    <button className="btn btn-primary btn-block">
                                        Performance
                                    </button>
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
                </div> 
                </div>
                
        )
    }
}

export default SubjectRoom;