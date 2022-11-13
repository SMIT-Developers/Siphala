import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import "./StudentActivityButton.css"

function ActivityButton() {
    return (
        <>
            <Link to={"/student-dashboard-activity"}>
                <button className="get-start-btn">Do activities</button>
            </Link>
        </>


    );
}

export default ActivityButton;