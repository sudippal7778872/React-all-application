// Create componenets
// now we want to create few componenet and assemble here.components are Header.jsx
// Paragraph.jsx.

import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";  //you can import this way
import Paragraph from "./Paragraph"; //you can import this way


ReactDOM.render(
  <>
  <Header />
  <Paragraph></Paragraph>
  </>
  ,
  document.getElementById("root")
)

//we can use self close tag or normal tag.






















