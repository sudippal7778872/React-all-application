// greeting exercise
import React from "react";
import "./App.css"


function App() {
    const currentDate = new Date(2022, 25, 5, 11);
    const h = currentDate.getHours()
    let greeting = "";
    const GreetingStyle = {}

    if (h >= 1 && h <= 11) {
        greeting = "Good Morning"
        GreetingStyle.color = "green"
    }
    else if (h >= 12 && h <= 16) {
        greeting = "Good Afternoon"
        GreetingStyle.color = "blue";
    }
    else if (h >= 17 && h <= 20) {
        greeting = "Good Evening"
        GreetingStyle.color = "Orange";
    }
    else {
        greeting = "Good Night";
        GreetingStyle.color = "black";
    }

    return (
        <div className="div1">
            <h1 className="header">Hi sir, <span style={GreetingStyle}>{greeting}</span></h1>
        </div>
    )
}

export default App;

// form multiple element we can use div or React Fragment.
