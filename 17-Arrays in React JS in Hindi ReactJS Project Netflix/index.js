// props
// netflix web series

// here we store all the card attribute in Sdata.jsx in array to make more simple.

import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import "./index.css"
import Sdata from "./Sdata"



ReactDom.render(
  <>
  <h1 className="heading_style">Top 5 Netflix web Series</h1>
    <Card 
    imgsrc={Sdata[0].imgsrc}
    title ={Sdata[0].title}
    name = {Sdata[0].name}
    link = {Sdata[0].link}
    />
    <Card 
    imgsrc={Sdata[1].imgsrc}
    title ={Sdata[1].title}
    name = {Sdata[1].name}
    link = {Sdata[1].link}
    />
    <Card 
    imgsrc={Sdata[2].imgsrc}
    title ={Sdata[2].title}
    name = {Sdata[2].name}
    link = {Sdata[2].link}
    />
    <Card 
    imgsrc={Sdata[3].imgsrc}
    title ={Sdata[3].title}
    name = {Sdata[3].name}
    link = {Sdata[3].link}
    />
    <Card 
    imgsrc={Sdata[4].imgsrc}
    title ={Sdata[4].title}
    name = {Sdata[4].name}
    link = {Sdata[4].link}
    />
  </>
  ,
  document.getElementById("root")
)






