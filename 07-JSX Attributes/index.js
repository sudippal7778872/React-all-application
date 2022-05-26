import React from "react";
import ReactDom from "react-dom";
// JSX attribute, all attribute are same as html. if require we have to write the second
// word in camel case. we have one attribute "content-editable=true"
// for more about attribute. search global attribute.
// now we want to show one image in our page. we can store the url into variable.

const img1 = "https://picsum.photos/200/300";

ReactDom.render(
  <>
  <h1 contentEditable="true">Hello world</h1>
  <img src={img1} alt="random image"/>
  </>
  ,
  document.getElementById("root")
)


























