// for each child item there should be one unique key. that should be "key".no change.
// we have to write the word "key" else we get warning.
// the value of key will be unique. but it can be any datatype.

// now here we will give "id" to all object in Sdata.jsx.

// after that now we want to separate imgsrc property.

// after that move all this things to app. and render only app.

import React from "react";
import ReactDom from "react-dom";
import "./index.css"
import App from "./App"


ReactDom.render(
  <App />
  ,
  document.getElementById("root")
)




