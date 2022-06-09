import React from 'react'
import Clock from 'react-live-clock';

const App = () => {
  return (
    <div>
      <Clock /> <br />
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC+5:30'} />
    </div>
  )
}

export default App