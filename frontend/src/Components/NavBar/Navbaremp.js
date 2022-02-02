import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Axios from "axios";

const Navbar = () => {
    return (
        <aside style={{marginLeft:"0px"}} className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link" style={{ height: "60px" }}>
                <img src="dist/img/Logo1.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light" style={{ fontSize: "30px" }}>Shift Planner</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="User" className="d-block">Welcome</a>
                    </div>
                </div>


                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                        <Link to="/HomePageemp">
                            <li className="nav-item">
                                <a href="/HomePageemp" className="nav-link">
                                    <i class="fas fa-home"></i>
                                    <p>
                                        Home Page
                                    </p>
                                </a>
                            </li>
                        </Link>
                        <Link to="/Emp_Shift">
                            <li className="nav-item">
                                <a href="/Emp_Shift" className="nav-link">
                                    <i class="fas fa-users" ></i>
                                    <p>
                                        Shift Plan
                                    </p>
                                </a>
                            </li>
                        </Link>
                        <Link to="/Preference">
                            <li className="nav-item">
                                <a href="/Preference" className="nav-link">
                                    <i class="fas fa-users" ></i>
                                    <p>
                                        Offday Preference
                                    </p>
                                </a>
                            </li>
                        </Link>
                        <Link to="/Helpemp">
                            <li className="nav-item">
                                <a href="/Helpemp" className="nav-link">
                                    <i class="fas fa-question" ></i>
                                    <p>
                                        Help
                                    </p>
                                </a>
                            </li>
                        </Link>


                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}

export default Navbar;