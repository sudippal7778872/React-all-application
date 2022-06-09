import React, { createContext } from 'react'
import Comp1 from './useContext/Comp1'

const FullName = createContext();
const App = () => {
  return (
    <div>
      <FullName.Provider value={"Sudip Pal"}>
        <Comp1 />
      </FullName.Provider>
    </div>
  )
}

export default App;
export { FullName };