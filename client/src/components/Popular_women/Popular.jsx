import React from 'react';
import data_product from '../assets/popularWomen';
import Item from '../Item/Item';
import './popular.css';
const Popular = ()=>{
    return(
        <div className='flex flex-col items-center p-8'>
            <div className='popular-text p-12 flex items-center justify-center'>
                <h1 className='text-4xl font-bold text-decoration-line: underline text-[#f31f1f]'>Popular in Women</h1>                
            </div>
            <div className='flex gap-8 justify-center flex-wrap sm: gap-4'> 
                {
                    data_product.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price} />
                    })
                }
            </div>
        </div>
    )
}

export default Popular;