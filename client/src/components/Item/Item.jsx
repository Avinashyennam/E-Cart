import React from "react";
import {Link} from 'react-router-dom'
import './Item.css';
const Item = (props)=>{
    return(
        <div className="item flex flex-col w-72 rounded-lg">
            <div className="item-image">
                <Link to={`/product/${props.id}`}><img src={props.image} alt="not found" style={{width:"330px", height:"370px", borderRadius:"6px"}}/></Link>
            </div>
            <div className="item-prices flex flex-col gap-4 p-2">
                <p className="text-xl font-semibold">{props.name}</p>
                <div className="flex gap-3 text-xl">
                    <p>${props.newprice}</p>
                    <p className="text-decoration-line: line-through text-slate-500">${props.oldprice}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;