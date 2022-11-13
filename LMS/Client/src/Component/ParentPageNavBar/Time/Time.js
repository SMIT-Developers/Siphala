import React, { useEffect, useState } from "react";
import "./Time.css"

function Time() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return <div  className="time-style">{clockState}</div>;
}

export default Time;