import React from "react";
import ReactDom from "react-dom";
// now we want to style our page. we use index.css. and will import it to this page.
// and we also use "className Property" because "class" is a reserve keyword here.
// now if we want to use any google fonts then the "link tag" we have to paste in 
// "index.html" and the font style in inline or .css file.

import './index.css';
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/301";
const img3 = "https://picsum.photos/200/302";

ReactDom.render(
  <>
  <h1 className="header">Hello world</h1>
  <div className="img-div">
  <img src={img1} alt="random image"/>
  <img src={img2} alt="random image"/>
  <img src={img3} alt="random image"/>
  </div>
  </>
  ,
  document.getElementById("root")
)


























