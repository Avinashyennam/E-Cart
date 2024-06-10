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
// import mens_banner from './components/assets/mens_banner.jpg'
// import women_banner from './components/assets/women_banner2.jpg';
// import women_banner from './components/assets/banner.jpg';
// import banner2 from './components/assets/banner2.jpg'
import women_banner from './components/assets/women_banner.png';
import men_banner from './components/assets/men_banner.png';
import kids_banner from './components/assets/kids_banner.png';
function App() {

  const womenBg = '#c26228';
  const womenBannerText = "Unleash Your Inner Fashionista! Exclusive Women's Wear"
  const menbg = "#9ca6b0";
  const mentext = "New Arrivals: Trendy Styles for Every Man"
  const kidsbg = "#9886c2";
  const kidtext = "Brighten Their Day with Our Kids Collection";
  const menStyles = {
    color: "transparent",
    background: "linear-gradient(to right, #030b20 60%, #7f8da7)",
    backgroundClip: "text"
  }
  const womenStyles = {
    color: "#eacab2",
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/men' element = {<ShopCategory category="men" banner={men_banner} bg={menbg} text={mentext} styles={menStyles}/>} />
          <Route path='/women' element = {<ShopCategory category="women" banner={women_banner} bg={womenBg} text={womenBannerText} styles={womenStyles}/>} />
          <Route path='/kids' element = {<ShopCategory category="kid" banner={kids_banner} bg={kidsbg} text={kidtext} />} />
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
