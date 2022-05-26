import React from 'react';
import ReactDom from 'react-dom';

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

/* if we use the 1st way or div tag one the one extra div will create.because we already 
having one div in index.html .so later in style time we may have some issue.so to 
avoid that we use "React Fragment"
let see below:-
*/
// React Fragment 
// ReactDom.render(
//   <React.Fragment>
//     <h1>Hello World</h1>
//     <p>i am prallad.</p>
//     <h2>how are you all?</h2>
//   </React.Fragment>
//   ,
//   document.getElementById("root")
//   )
// now we have only one div tag. inspect the element you can see it.
// in short way we can write like:-
ReactDom.render(
  <>
    <h1>Hello World</h1>
    <p>i am prallad pal.</p>
    <h2>how are you all?</h2>
  </>
  ,
  document.getElementById("root")
  )


























