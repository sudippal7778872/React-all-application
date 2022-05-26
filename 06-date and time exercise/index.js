import React from 'react';
import ReactDom from 'react-dom';

const d = new Date();

// now i want to print this both variale.
// we can use two separate second bracket or concatination operator and template string.
ReactDom.render(
  <>
    <h1>Hello World</h1>
    <p>Now {`time  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `}</p> 
    <p>and  {`date  ${d.getDate()}:${d.getMonth()+1}:${d.getFullYear()} `}</p> 
  </>
  ,
  document.getElementById("root")
  )



























