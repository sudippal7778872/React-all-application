// props
// netflix web series
import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(
//   <React.Fragment>
//     <div className="cards">
//       <div className="card">
//         <img src="https://picsum.photos/200/300" alt="myPic" className="card_img" />
//         <div className="card_info">
//           <span className="card_category">A Netflix Original Series</span>
//           <h3 className="card_title">Dark</h3>
//           <a href="https://www.netflix.com/in/title/80100172" target="_blank" >
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   </React.Fragment>,
//   document.getElementById("root")
// )

// now here we need suppos 10 card, we can directly copy 10 time or we can make a 
// function and we can call that function 10 time.
// let see how to make function
// now if we want to change the card property. props gives us that feasility

// props is a variable which is storing all the property of card which we created below.
// for all variable will create property in card and use dynamically through variable.
// after that we will write the variable in curly braces.
// note:- after setting 1st card property. other card property will be in 
// same name and order.

function Card(props) {  
  console.log(props)
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.name}</h3>
          <a href={props.link} target="_blank" >
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
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






