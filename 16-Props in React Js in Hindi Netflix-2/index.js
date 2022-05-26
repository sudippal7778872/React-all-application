// props
// netflix web series

// here we are dividing the whole code into some componenets
import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";



ReactDom.render(
  <>
    <Card imgsrc="https://picsum.photos/200/300"
    title = "A Netflix Original Series"
    name = "DARK"
    link = "https://www.netflix.com/in/title/80100172"
    />

    <Card imgsrc="https://picsum.photos/201/300"
    title = "A Netflix Original Series"
    name = "Avatar"
    link = "https://www.netflix.com/in/title/80100172"
    />

    <Card 
    imgsrc="https://picsum.photos/200/301"
    title = "A Netflix Original Series"
    name = "Titanic"
    link = "https://www.netflix.com/in/title/80100172"
    />
  </>
  ,
  document.getElementById("root")
)






