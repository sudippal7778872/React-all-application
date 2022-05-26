// props
// netflix web series

// now we have to write card 5 time. now we will try to minimize our code into single
// card through map().
// we no need to worry about 5 or 100 card. through map() we pass each array item one 
// by one.


import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import "./index.css"
import Sdata from "./Sdata"

//in map function we pass a call back function we have to define it. so we define here.
// map method(value,index,array) this is the format.but here we only working with value.
// this way we can n number of card.

// function nCard(value){
//   return (
//     <Card 
//     imgsrc={value.imgsrc}
//     title ={value.title}
//     name = {value.name}
//     link = {value.link}
//     />
//   )
// }


ReactDom.render(
  <>
    <h1 className="heading_style">Top 5 Netflix web Series</h1>

    {Sdata.map((value) => {
      return (<Card
        imgsrc={value.imgsrc}
        title={value.title}
        name={value.name}
        link={value.link}
      />)
    })}
  </>
  ,
  document.getElementById("root")
)


// same in arrow function
// {
//   Sdata.map((value) => {
//     return (
//       <Card
//         imgsrc={value.imgsrc}
//         title={value.title}
//         name={value.name}
//         link={value.link}
//       />
//     )
//   })
// }



