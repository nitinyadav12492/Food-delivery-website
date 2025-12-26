import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [searchQuery, setSearchQuery] = useState("") // NEW

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} setSearchQuery={setSearchQuery} /> {/* only here */}
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/card' element={<Card />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
