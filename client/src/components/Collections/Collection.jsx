import React, {useState, useEffect} from "react";
import './Collection.css';
import Item from "../Item/Item";
//import new_collection from '../assets/new_collection';
const Collection = ()=>{
    
    const [new_collection, setNewCollection] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/newcollection")
        .then(response => response.json())
        .then((data)=>{
            setNewCollection(data);
        })
    },[])
    return(
        <>
            <div className="flex flex-col items-center p-8">
                <h1 className='text-4xl font-bold my-10'>New Collections</h1>
                <div className="flex flex-wrap gap-12 justify-center">
                    {
                        new_collection.map((item,i)=>{
                            return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Collection;