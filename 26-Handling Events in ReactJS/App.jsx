// event handling
import React, { useState } from 'react'



const App = () => {
  const color = "#d2dbdd";
  const [bgColor, setBgColor] = useState(color);

  const NewBg = () => {
    const nColor = "yellow"
    setBgColor(nColor);
  }

  const NewBg2 = () => {
    const nColor = "gray"
    setBgColor(nColor);
  }

  return (
      <>
      <div style={{backgroundColor:bgColor}}>
      <button
      onClick={NewBg}
      onDoubleClick ={NewBg2}
      >Click Me</button>
      </div>
      </>
  )
}

export default App