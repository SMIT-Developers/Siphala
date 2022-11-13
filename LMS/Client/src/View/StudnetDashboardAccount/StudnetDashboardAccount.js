import React from "react";
import PHomeComponent from "../../Component/ParentPageNavBar/HeadingBar/PHomeComponent";
import StudentNavBar from "../../Component/StudnetPageNavBar/StudentSlideNavbar/StudentNavBar";
import AccountTitle from "../../Component/StudentDashboardAccount/AccountTitle/AccountTitle";
import StudentAccDetails from "../../Component/StudentDashboardAccount/AccountDetails/AccountDetails";
import auth from "../../auth/auth";

function StudentDashboardAccount() {

    auth("STD")
    return (
        <>
            <div className="nav-bar-div">
                <StudentNavBar/>
            </div>

            <div className="heading-bar-div">
                <PHomeComponent/>
            </div>

            <div className="body-section shadow   bg-white rounded">
                <AccountTitle/>

                <div className="account-body-main">
                <StudentAccDetails/>
                </div>
            </div>


        </>

    );
}

export default StudentDashboardAccount;