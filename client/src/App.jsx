import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import Login from './pages/LoginSignup'
import Cart from './pages/Cart'
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory'
import mens_banner from './components/assets/mens_banner.jpg'
import women_banner from './components/assets/women_banner2.jpg';
// import women_banner from './components/assets/banner.jpg';
import banner2 from './components/assets/banner2.jpg'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/men' element = {<ShopCategory category="men" banner={mens_banner}/>} />
          <Route path='/women' element = {<ShopCategory category="women" banner={women_banner}/>} />
          <Route path='/kids' element = {<ShopCategory category="kids" banner={banner2}/>} />
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
