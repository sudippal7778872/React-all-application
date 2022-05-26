import React from 'react';
import ReactDom from 'react-dom';

const fullName = "prallad pal";
// now i want to print this variale or any expression. how we can do that?
// use second bracket to use variable.
ReactDom.render(
  <>
    <h1>Hello World</h1>
    <p>i am {fullName}</p> 
    <p>my id is  {2+3}</p> 
    <p>your OPT is : {Math.floor(Math.random()*100000)}</p> 
  </>
  ,
  document.getElementById("root")
  )

// we cant write any statement(if, for etc) into it.
























