import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import './App.css'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="body2" color="text.secondary">
        Test Typography
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  )
}

export default App
