import React from "react";
import "./../Activities.css";
import EnglishActivityOne from "./EnglishActivityOne";
import EnglishActivityTwo from "./EnglishActivityTwo";

export default function EnglishActivity(props) {
    return (
        <div className="activity-box">
            <div className="activity">
                {props.id === 1 ? <EnglishActivityOne/> : <EnglishActivityTwo/>}
                <button type="button" onClick={props.handleClose} className="activity-button">Close</button>
            </div>
        </div>

    );
}