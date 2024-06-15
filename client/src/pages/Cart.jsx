import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
    const { cartItems, all_products, removeFromCart, count } = useContext(ShopContext);

    return (
        <>
            <div className="flex gap-8 p-8 bg-slate-100">
                <div className=" border-black w-3/5 bg-white">
                    <h1 className="text-xl mx-10 my-2">My cart ({count})</h1>
                    <hr />
                    {
                        all_products.map((item) => {
                            if (cartItems[item.id] > 0) {
                                return (
                                    <div key={item.id} className="flex gap-10 p-4 border-t border-slate-300">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="image">
                                                <img src={item.image} alt="not found" width={100} height={100} />
                                            </div>
                                            <div className="quantity flex gap-2">
                                                <button className="border border-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-2xl">-</button>
                                                <h2 className="w-10 border border-black flex items-center justify-center">4</h2>
                                                <button className="border border-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-2xl">+</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="text-xl font-semibold">{item.name}</div>
                                            <div className="flex gap-4 items-center">
                                                <h1 className="text-3xl font-semibold">${item.new_price}</h1>
                                                <h2 className="text-lg text-decoration-line: line-through text-slate-500">${item.old_price}</h2>
                                                <h2 className="text-lg text-green-500">77% off</h2>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="bg-[#02be47] px-6 py-1 text-xl rounded">Buy</button>
                                                <button className="bg-[#fe3f3b] px-3 py-1 text-xl rounded" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                        <div>
                                            <h2>Free delivery in 3-4 days</h2>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="border-2 border-red-600 w-2/5">
                    <h1>Total Items</h1>
                </div>
            </div>
        </>
    )
}

export default Cart;