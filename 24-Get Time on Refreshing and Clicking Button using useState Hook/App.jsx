// useState hook

import React, { useState } from "react";

const d = new Date().toLocaleTimeString();
// let currentTime = d.toLocaleTimeString();
// console.log(currentDate); 

const App = () => {
    const [currentTime, setCurrentTime] = useState(d);

    const CurrentTimes = () => {
        const d = new Date();
        setCurrentTime(d.toLocaleTimeString());
    }

    return (
        <>
            <h1> {currentTime} </h1>
            <button onClick={CurrentTimes}>get time</button>
        </>
    )
}

export default App;


