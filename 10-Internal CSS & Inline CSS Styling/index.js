//inline css
import React from "react";
import ReactDom from "react-dom";
// incase of inline css we have write same a object, style={{key:"value",key:"value"}}
// first curly braces is for expression in JSX and second one is for object.


// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/301";
// const img3 = "https://picsum.photos/200/302";

// ReactDom.render(
//   <>
//   <h1 style={{color:"blue", backgroundColor:"lightgray", textAlign:"center"}}>Hello world</h1>
//   <div className="img-div">
//   <img src={img1} alt="random image"/>
//   <img src={img2} alt="random image"/>
//   <img src={img3} alt="random image"/>
//   </div>
//   </>
//   ,
//   document.getElementById("root")
// )


// 2nd way 
// if suppose want to set lot of css property in that case inline style will be big.
// to prevent from that we can use "Object".
const header ={
  color:"red",
  backgroundColor:"black"
}

ReactDom.render(
  <>
  <h1 style={header}>Hello world</h1>
  <div className="img-div">
  </div>
  </>
  ,
  document.getElementById("root")
)
























