import React from "react";
import "./../Activities.css";
import MathsActivityOne from "./MathsActivityOne";
import MathsActivityTwo from "./MathsActivityTwo";

export default function MathsActivity(props) {
    return (
        <div className="activity-box">
            <div className="activity">
                {props.id === 1 ? <MathsActivityOne/> : <MathsActivityTwo/>}
                <button type="button" onClick={props.handleClose} className="activity-button">Close</button>
            </div>
        </div>

    );
}