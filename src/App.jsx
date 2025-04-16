import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home'
import './styles/global.css'
import FirstMinute from './pages/first-minute'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first-minute' element={<FirstMinute />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
