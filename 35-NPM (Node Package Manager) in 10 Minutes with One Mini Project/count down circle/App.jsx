import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const App = () => {
  return (
    <div>
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={['#4ceb34', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[20, 10, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default App