import React from 'react';
import Time from "../Time/Time";
import "./ParentPageNavBar.css"
import logo from "../../../Assets/logo.png"
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import homes from "../../../Assets/NavBar/home.png"
import notification from "../../../Assets/NavBar/bell.png"
import account from "../../../Assets/NavBar/account.png"
import progress from "../../../Assets/NavBar/arrows.png"
import { Link, useLocation } from "react-router-dom";

import logout from '../../../auth/logout'

function NavBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}} className="">
            <CDBSidebar textColor="#fff" backgroundColor="#A35877" className="main-div">
                <div className=" ">
                    <CDBSidebarHeader className="slide-icon"
                                      prefix={<i className="fa fa-bars fa-large slide-icon slide-icon"></i>}>
                        <a href="/parent-dashboard-home" className="text-decoration-none " style={{color: 'inherit'}}>
                            SIPHALA
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarHeader className="slide-1">
                        <img src={logo} alt="logo" className="logo-slide-bar"/>

                        <a href="/parent-dashboard-home" className="text-decoration-none title-name"
                           style={{color: 'inherit'}}>
                            SIPHALA
                        </a>
                    </CDBSidebarHeader>
                </div>


                <CDBSidebarContent className="sidebar-content set-possession">
                    <CDBSidebarMenu>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">

                            <Link to={"/parent-dashboard-home"}
                                  className={
                                      currentPath.includes("parent-dashboard-home" )
                                          ? "nav-link active nav-bar-link"
                                          : "nav-link nav-bar-link"
                                  }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >

                                <img src={homes} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Home
                                </CDBSidebarMenuItem>
                            </Link>

                            <Link to={"/parent-dashboard-activity"} className={
                                currentPath.includes("parent-dashboard-activity" )
                                    ? "nav-link active nav-bar-link"
                                    : "nav-link nav-bar-link"
                            }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >
                                <img src={progress} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Progress
                                </CDBSidebarMenuItem>
                            </Link>



                            <Link to={"/parent-dashboard-notification"} className={
                                currentPath.includes("parent-dashboard-notification" )
                                    ? "nav-link active nav-bar-link"
                                    : "nav-link nav-bar-link"
                            }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >
                                <img src={notification} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Notification
                                </CDBSidebarMenuItem>
                            </Link>



                            <Link to={"/parent-dashboard-account"} className={
                                currentPath.includes("parent-dashboard-account" )
                                    ? "nav-link active nav-bar-link"
                                    : "nav-link nav-bar-link"
                            }role="tab"
                                  aria-controls="v-pills-home" aria-selected="true" >
                                <img src={account} alt="home-icon" className="icon-nav-bar"/>

                                <CDBSidebarMenuItem className="item">

                                    Account
                                </CDBSidebarMenuItem>
                            </Link>

                        </div>

                    </CDBSidebarMenu>
                </CDBSidebarContent>


                <CDBSidebarFooter style={{textAlign: 'center'}}>

                    <div className="btn-footer">
                        <div
                            className="time-section" style={{
                            padding: "5px"
                        }}
                        > <CDBSidebarMenuItem>

                            <Time/>
                        </CDBSidebarMenuItem>
                        </div>
                        


                            <CDBSidebarMenuItem>
                        <div className="log-out-section">

                            <button type="button" className="btn btn-rounded log-out-btn" onClick={logout}>Logout</button>
                        </div>
                            </CDBSidebarMenuItem>

                    </div>

                </CDBSidebarFooter>
            </CDBSidebar>
        </div>

    );
}

export default NavBar;