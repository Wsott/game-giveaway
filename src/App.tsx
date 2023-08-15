import './css/App.css'
import Grid from './components/grid/Grid'
import NavBar from './components/navBar/NavBar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import GameInfo from './components/gameinfo/GameInfo'

const client = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={client}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/giveaways/:platform' element={<Grid/>}/>
        <Route path='/giveaway/:id' element={<GameInfo/>}/>
        <Route path='*'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
