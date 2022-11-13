import React from "react";
import NavBar from "../../Component/ParentPageNavBar/SlideNavBar/ParentPageNavBar";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import NotificationBody from "../../Component/ParentDashboardNotification/NotificationBody/NotificationBody";
import NotificationTitle from "../../Component/ParentDashboardNotification/Title/NotificationTitle";
import "./ParentDashboardNotification.css"

import auth from "../../auth/auth";

function ParentDashboardNotification() {
    auth("PRT")
    return (
        <>
            <div className="nav-bar-div">
                <NavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>



            <div className="body-section shadow   bg-white rounded ">

                <NotificationTitle/>
                <div className="notify">
                <NotificationBody/>
                </div>
            </div>

        </>

    );
}

export default ParentDashboardNotification;