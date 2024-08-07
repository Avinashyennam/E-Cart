import React, {useState, useEffect} from 'react';
//import data_product from '../assets/popularWomen';
import Item from '../Item/Item';
import './popular.css';
const Popular = ()=>{

    const [popularWomen, setPopularWomen] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/popularinwomen")
        .then(response => response.json())
        .then((data)=>{
            setPopularWomen(data);
        });
    },[])
    return(
        <div className='flex flex-col items-center p-8'>
            <div className='popular-text p-12 flex items-center justify-center'>
                <h1 className='text-4xl font-bold text-decoration-line: underline text-[#f31f1f]'>Popular in Women</h1>                
            </div>
            <div className='flex gap-8 justify-center flex-wrap sm: gap-4'> 
                {
                    popularWomen.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price} />
                    })
                }
            </div>
        </div>
    )
}

export default Popular;