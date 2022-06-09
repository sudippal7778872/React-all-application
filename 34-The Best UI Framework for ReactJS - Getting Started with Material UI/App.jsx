import React, { useState } from 'react'
import "./App.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip title="Add">
          <Button className='green-btn' variant='outlined' onClick={() => { setValue(value + 1) }}>
            <AddIcon />
          </Button>
        </Tooltip>

        <Tooltip title="delete">
        <Button className='red-btn' variant='outlined' onClick={dec}>
          <RemoveIcon />
        </Button>
        </Tooltip>
      </div>
    </>
  )
}

export default App