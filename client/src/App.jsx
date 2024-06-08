import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import Men from './pages/men'
import Women from './pages/women'
import Kids from './pages/kids'
import Login from './pages/LoginSignup'
import Cart from './pages/Cart'
import Product from './pages/Product';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/men' element = {<Men />} />
          <Route path='/women' element = {<Women />} />
          <Route path='/kids' element = {<Kids />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='/product' element = {<Product />}>
            <Route path=':productId' element = {<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
      {/* <Home /> */}
      
    </>
  )
}

export default App
