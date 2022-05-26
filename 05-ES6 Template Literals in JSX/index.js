import React from 'react';
import ReactDom from 'react-dom';

const friend1 = "prallad pal";
const friend2 = "Suman Mukherjee";
// now i want to print this both variale.
// we can use two separate second bracket or concatination operator and template string.
ReactDom.render(
  <>
    <h1>Hello World</h1>
    <p>my friends are {friend1 +" "+ friend2}</p> 
    <p>Hi, {`my friends are ${friend1} and ${friend2}`}</p> 
  </>
  ,
  document.getElementById("root")
  )

// if we want any console.log in that case here we have to use template string.
console.log(`my friends are ${friend1} ${friend2}`);


























