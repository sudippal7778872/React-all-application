// Creating Simple Greeting Website

import React from "react";
import ReactDOM from "react-dom";
import './index.css';

//new Date(year,month,day,hour,minute,second)
const currentDate = new Date(2022, 25, 5, 12);  // we can set date value externally
// const currentDate = new Date();
const h = currentDate.getHours()
let greeting = "";

//now we will create empty object and color our code
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


ReactDOM.render(
  <>
    <div className="div1">
      <h1 className="header">Hi sir, <span style={GreetingStyle}>{greeting}</span></h1>
    </div>
  </>
  ,
  document.getElementById("root")
)
























