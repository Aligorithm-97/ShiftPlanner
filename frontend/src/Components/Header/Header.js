import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";


const Header = () => {
    Axios.defaults.withCredentials = true;
    let history = useHistory();
    function Logoutfunction(){
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                response.data.loggedIn = false;
                
            }
          });

    }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">


            {/* Left navbar links */}
            <ul className="navbar-nav">


                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>




            </ul>


            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">


                {/* Navbar Search */}
                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-search" />
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>


                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-comments" />
                        <span className="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">
                                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        Brad Diesel
                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">Call me whenever you can...</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">
                                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        John Pierce
                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">I got your message bro</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">
                                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        Nora Silvester
                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                    </h3>
                                    <p className="text-sm">The subject goes here</p>
                                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>



                {/* Full screen button */}
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>


                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <div className="user-panel pb-1 mb-1 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a className="d-block"></a>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        
                        
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <p> Profile </p>
                            </a>
                            </li>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />


                        <a onClick={Logoutfunction} href="#" className="dropdown-item">
                            {/* Message Start */}
                            <a href="/" className="nav-link">
                                <p> Log Out </p>
                            </a>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                    </div>
                </li>


            </ul>
        </nav>

    )
}

export default Header;