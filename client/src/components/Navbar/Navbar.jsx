import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
let Navbar = ()=>{
    return(
        <>
            <div className='flex gap-4 justify-around'>
                <div className='flex gap-4 justify-around items-center'>
                    <img src={logo} alt='not found' className='w-20 h-20'/>
                    <h1 className='logo-text text-4xl font-bold'>Cart</h1>
                </div>
                <div>
                    <ul className='flex gap-4 justify-between'>
                        <li>Shop</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div className='flex gap-4 justify-between'>
                    <div>Login</div>
                    <div>Cart</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;