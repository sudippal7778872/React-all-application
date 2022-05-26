/* Index.js file we will tell that what to show or render.
we have only one html file index.html, that we will use to show our content. there 
is a div tag which id is root. which we use to show our content.

render() function take three parameter.
render("what to show","where to show","callback function"){
}

we need react module only when we want to write any JSX.
if we want to work with html document mode then we need that react-dom module. 

babel is aa compiler, used to convert modern javascript date to understandable way 
to browser. when we create react app that time it is automatically installed.
*/
/*
var React = require('react'); //old way
var ReactDom = require('react-dom'); //old way
*/
// after es6

//import React from 'react';
//import ReactDom from 'react-dom';
//ReactDom.render(<h1>Hello World</h1>, document.getElementById("root")) //done, later we include callback function.

/* in render function (<h1>Hello World</h1>) is call JSX. it is not a html.
*/

// if we want to write only javascript code. if we dont want babel then;-

var h1 = document.createElement("h1");
h1.innerHTML= "Hi World"
// now we have show out things on index.html page for that
document.getElementById("root").appendChild(h1);  // o/p: hi world


