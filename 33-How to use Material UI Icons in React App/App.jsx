import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

const App = () => {
  const [value, setValue] = useState(0);

  const dec = () => {
    if (value <= 0) {
      window.alert("it's already less that zero");
    }
    else {
      setValue(value - 1);
    }
  }

  return (
    <>
      <div className='container'>
        <h1> {value} </h1>
        <Button variant='outlined' onClick={() => { setValue(value + 1) }}>
          <AddIcon color='success' />
        </Button>
        <Button variant='outlined' onClick={dec}>
          <RemoveIcon color='error' />
        </Button>
      </div>
    </>
  )
}

export default App