import React from 'react';
import ReactDom from 'react-dom';


// ReactDom.render(<h1>Hello World</h1>, document.getElementById("root")) 
// now render method takes only one JSX element, then how can we add multiple elements?
// 1st way we have to use div tag and write everything into it.
ReactDom.render(
  <div>
    <h1>Hello World</h1>
    <p>i am prallad.</p>
    <h2>how are you all?</h2>
  </div>
  ,
  document.getElementById("root")
  )

// 2nd way we can use array. every jsx element will into that array
ReactDom.render(
  [
    <h1>Hello World</h1>,
    <p>i am prallad.</p>,
    <h2>how are you all?</h2>
  ],
  document.getElementById("root")
  )



// this way we can add multiple JSX.


