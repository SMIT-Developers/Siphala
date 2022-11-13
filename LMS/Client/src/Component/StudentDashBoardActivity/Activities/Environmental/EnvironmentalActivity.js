import React from "react";
import "./../Activities.css";
import EnvironmentalActivityOne from "./EnvironmentalActivityOne";

export default function EnvironmentalActivity(props) {
    return (
        <div className="activity-box">
            <div className="activity">
                {props.id === 1 ? <EnvironmentalActivityOne/> : null}
                <button type="button" onClick={props.handleClose} className="activity-button">Close</button>
            </div>
        </div>

    );
}