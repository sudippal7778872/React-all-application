import React from "react";
import ReactDom from "react-dom";
import { addition, subtruction, division, multiplication } from './App'

ReactDom.render(
  <React.Fragment>
    <h1>enter you number for addition  = {addition(12,13,15)}</h1>
    <h1>enter you number for subtruction = {subtruction(40,12,1)}</h1>
    <h1>enter you number for division =  {division(60,4,3)}</h1>
    <h1>enter you number for multiplication = {multiplication(3,4,5)}</h1>
  </React.Fragment>
  ,
  document.getElementById("root")
)