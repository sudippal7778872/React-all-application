// digital clock

import React, { useState } from "react";

const DateTime = new Date().toLocaleString();

const App = () => {
    const [cDateTime,setcDateTime] = useState(DateTime)
    const CDT = () => {
        setInterval(()=>{
            let newDateTime = new Date().toLocaleString();
            setcDateTime(newDateTime);
        },500)
        
    }

    return (
        <>
        <h1 onClick={CDT}>{cDateTime}</h1>
        <button onClick={CDT}>start</button>
        </>
    )
}

export default App;
