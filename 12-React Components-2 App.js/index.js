// component
// now we want make simple this index.js. what we will do?
// will import everythng on app.jsx, and then will import that app.jsx here and 
// then render(). let see below.

import React from "react";
import ReactDom from "react-dom";
import App from "./App"
ReactDom.render(
  <>
  <App />
  </>
  ,
  document.querySelector("#root")
)








