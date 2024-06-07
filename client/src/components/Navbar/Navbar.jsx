import React from 'react';
import './Navbar.css';
// import logo from '../assets/logo.png';
let Navbar = ()=>{
    return(
        <>
            <div className='flex gap-4 justify-between items-center mx-10'>
                <div className='flex gap-1 justify-around items-center'>
                    <img src='/logo.png' alt='not found' className='w-20 h-20'/>
                    <h1 className='logo-text text-4xl font-bold'>Cart</h1>
                </div>
                <div>
                    <ul className='flex gap-12 justify-between'>
                        <li className='text-2xl font-medium hover:font-semibold'>Shop</li>
                        <li className='text-2xl font-medium hover:font-semibold'>Men</li>
                        <li className='text-2xl font-medium hover:font-semibold'>Women</li>
                        <li className='text-2xl font-medium hover:font-semibold'>Kids</li>
                    </ul>
                </div>
                <div className='flex gap-4 justify-between items-center'>
                    <div className='bg-red-500 px-2 py-1 rounded-lg'>
                        <button className='text-xl text-white'>Login</button>
                    </div>
                    <div>
                        <img src='/icons8-cart-100.png' alt='not found' width={36} height={35}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;