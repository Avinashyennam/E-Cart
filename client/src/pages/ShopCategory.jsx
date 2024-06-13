import React, { useContext, useState } from "react";
import ShopContextProvider, { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
const ShopCategory = (props) => {

    const { all_products } = useContext(ShopContext)
    // const {all_items} = all_products.filter()
    console.log(all_products);

    return (
        <>
            <div className="flex justify-center items-center" style={{ backgroundColor: `${props.bg}` }}>
                <div style={props.styles} className="flex items-center justify-center w-1/2">
                    <h1 className="flex text-6xl font-bold">{props.text}</h1>
                </div>
                <img src={props.banner} alt="not found" style={{ width: "370px", height: "550px" }} />
            </div>
            <div className="flex flex-col gap-10 items-center p-8">
                <div className="flex justify-between w-full px-20 text-xl">
                    <h1 className=""><b>Showing 1-12 </b>out of 36 products</h1>
                    <div className="flex gap-2 items-center border border-slate-700 rounded-full py-1 px-3">
                        <h1>Sort by</h1>
                        <FontAwesomeIcon icon={faArrowDown}style={{width:"13px", height:"20px"}} />
                    </div>
                </div>
                <div className="flex flex-wrap gap-12 justify-center">
                    {
                        all_products.map((item,i)=>{
                            if(props.category === item.category)
                                {
                                    return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.old_price} newprice={item.new_price} /> 
                                }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ShopCategory;