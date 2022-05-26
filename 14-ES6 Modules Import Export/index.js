// ES6 import export
// if the imported object is a function we have to call that here.

import React from "react";
import ReactDom from "react-dom";
// import youtuber from "./App"
// import { prog, greeting, h } from "./App"
// import * as app from './App'  //to import everything from app.jsx


// ReactDom.render(
//   <>
//   <h1>{youtuber}</h1>
//   <h1>{prog}</h1>
//   <h1>{ greeting() }</h1>
//   <h1>{ h() }</h1>
//   </>
//   ,
//   document.querySelector("#root")
// )


// same thing we can do
import * as app from './App'  //to import everything from app.jsx

ReactDom.render(
  <>
  <h1>{app.default}</h1>
  <h1>{app.prog}</h1>
  <h1>{app.greeting() }</h1>
  <h1>{app.h() }</h1>
  </>
  ,
  document.querySelector("#root")
)








