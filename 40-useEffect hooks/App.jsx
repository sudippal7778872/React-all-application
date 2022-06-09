import React, { useEffect, useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0);
  const f1 = () => {
    window.alert("i am f1");
  }
  const f2 = () => {
    window.alert("i am f2");
  }
  useEffect(() => {
    f1();
    f2()
  }, []
  )
  // useEffect(()=>{
  //   window.alert("you click me");
  // },[])
  return (
    <div>
      <button onClick={() => { setValue(value + 1) }}> Clicking Times {value}</button>
      <button onClick={f1} onChange={f2}></button>
    </div>
  )
}

export default App