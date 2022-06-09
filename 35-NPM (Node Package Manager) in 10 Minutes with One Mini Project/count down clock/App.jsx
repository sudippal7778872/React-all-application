import React from 'react'
import Countdown from 'react-countdown';

const App = () => {
  return (
    <div>
      <Countdown date={Date.now() + 100000} />
    </div>
  )
}

export default App