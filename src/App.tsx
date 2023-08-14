import './css/App.css'
import Grid from './components/grid/Grid'
import NavBar from './components/navBar/NavBar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'

const client = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={client}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/giveaway/:platform' element={<Grid/>}/>
        <Route path='*'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
