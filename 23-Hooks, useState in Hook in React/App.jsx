// useState hook

import React, { useState } from "react";



const App = () => {
    const [count, setCount] = useState(1);

    const IncNum = () => {
        setCount(count + 1);
        // console.log("clicked ", count);
    }

    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    )
}

export default App;


