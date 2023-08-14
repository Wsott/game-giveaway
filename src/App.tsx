import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Card from './components/card/Card'
import Grid from './components/grid/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid/>
    </>
  )
}

export default App
