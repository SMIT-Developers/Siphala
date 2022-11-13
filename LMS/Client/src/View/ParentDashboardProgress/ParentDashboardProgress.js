import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import ProgressBody from "../../Component/ParentDashboardProgress/ProgressBody/ProgressBody";
import ProgressTitle from "../../Component/ParentDashboardProgress/HeadignTitle/HeadingTitle";

import auth from "../../auth/auth";

function ParentDashboardProgress() {

    auth("PRT")
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className=" body-section shadow   bg-white rounded">
                <ProgressTitle/>
                <ProgressBody/>
            </div>

        </>

    );
}

export default ParentDashboardProgress;