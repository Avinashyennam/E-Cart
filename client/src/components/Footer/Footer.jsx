import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faWhatsapp, faXTwitter} from '@fortawesome/free-brands-svg-icons';
const Footer = ()=>{
    return(
        <>
            <div className='bg-black flex justify-between p-16 text-white font-serif'>
                <div>
                    <div>
                        <img src='/logo.png' alt='not found' className='w-16 h-16'/>
                    </div>
                    <p className='text-white'>Shop and enjoy with your family</p>
                </div>
                <div>
                    <ul className='flex flex-col gap-4 text-lg'>
                        <li>Shop</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg '>Our Social</h2>
                    <ul className='social-icons flex flex-col items-start gap-4 font-sans'>                        
                        <li>
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: '#25D366'}}/>
                            <p>Whatsapp</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{color:"rgb(228, 64, 95)"}}/>
                            <p>Instagram</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <p>Twitter</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>For any queries complaint to us at</div>
                    <div>
                        <form className='flex flex-col gap-4'>
                            <input type='email' placeholder='Enter Email' className='rounded px-2'/>
                            {/* <input type="textarea" name="" id="" /> */}
                            <textarea name="" id="" className='text-slate-400 rounded p-1'>Post your complaints</textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;