import React from "react"
import "./App.css"
import {Stack} from '@mui/material'
import Logic from "./components/Logic"

const App = () => {
  return (
    <Stack 
    minHeight="100vh" 
    justifyContent="center" 
    alignItems="center"
    sx={{fontFamily: '"Poppins", sans-serif' }}
    >
      <Logic/>
  </Stack>
  )
}

export default App