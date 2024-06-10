import React, { useContext, useState } from "react";
import ShopContextProvider, { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";
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
                <img src={props.banner} alt="not found" style={{ width: "400px", height: "550px" }} />
            </div>
            <div className="flex flex-col items-center p-8">
                <div>
                    <h1 className='text-4xl font-bold my-10'>{props.category} collections</h1>
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