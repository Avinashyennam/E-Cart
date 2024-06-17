import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../context/ShopContext';
let Navbar = ()=>{

    const {count} = useContext(ShopContext)
    const {menu, setMenu} = useContext(ShopContext);

    return(
        <>
            <div className='main flex gap-4 justify-between items-center px-4'>
                <div className='logo flex gap-1 justify-around items-center'>
                    <Link to='/'><img src='/logo.png' alt='not found' className='w-20 h-20' onClick={()=> setMenu("shop")}/></Link>
                    <h1 className='logo-text text-4xl font-bold sm:text-3xl'>Cart</h1>
                </div>
                <div className='nav'>
                    <ul className='nav-menu flex gap-12 justify-between'>
                    <Link to='/'><li onClick={()=>setMenu("shop")} className='text-2xl font-medium hover:font-semibold'>Shop {menu === "shop"?<hr />:<></>}</li></Link>
                    <Link to='/men'><li onClick={()=>setMenu("men")} className='text-2xl font-medium hover:font-semibold'>Men {menu === "men"?<hr />:<></>}</li></Link>
                    <Link to='/women'><li onClick={()=>setMenu("women")} className='text-2xl font-medium hover:font-semibold'>Women {menu === "women"?<hr />:<></>}</li></Link>
                    <Link to='/kids'><li onClick={()=>setMenu("kids")} className='text-2xl font-medium hover:font-semibold'>Kids {menu === "kids"?<hr />:<></>}</li></Link>
                    </ul>
                </div>
                <div className='flex gap-4 justify-between items-center'>
                    <div className='button-div bg-red-500 px-2 py-1 rounded-lg'>
                        <Link to='/login'><button className='text-xl text-white flex items-center justify-center' onClick={()=>setMenu("login")}>Login</button></Link>
                        {menu === "login"?<hr />:<></>}
                    </div>
                    <div className='cart-logo flex flex-col items-center gap-1'>
                        <Link to='/cart'><img src='/icons8-cart-100.png' alt='not found' width={36} height={35} onClick={()=>setMenu("cart")}/></Link>  
                        {menu === "cart"?<hr />:<></>}             
                    </div>
                    <div className='cart-counter'>{count}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;