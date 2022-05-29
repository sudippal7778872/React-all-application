// digital clock

import React, { useState } from "react";

const DateTime = new Date().toLocaleString();

const App = () => {
    const [cDateTime, setcDateTime] = useState(DateTime)
    const CDT = () => {
        let newDateTime = new Date().toLocaleString();
        setcDateTime(newDateTime);
    }
    setInterval(CDT,500);


return (
    <>
        <h1>{cDateTime}</h1>
    </>
)
}

export default App;
