import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import "./ParentDashBoardHome.css"
import HomeTitle from "../../Component/ParentDashboardHome/HedingTitle/HedingTitleHome";
import HomeAnimation from "../../Component/ParentDashboardHome/HomeAnimation/HomeAnimation";

import auth from "../../auth/auth";
function ParentDashboardHome() {

    auth("PRT")
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">
                <div className="home-title">
                    <HomeTitle/>
                </div>


                <div className="home-animation-div">
                <HomeAnimation/>
                </div>



            </div>


        </>

    );
}

export default ParentDashboardHome;