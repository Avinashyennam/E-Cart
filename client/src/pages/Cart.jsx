import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
    const { cartItems, all_products, addToCart, removeFromCart, count, getTotalAmount, removed } = useContext(ShopContext);

    return (
        <>
            <div className="flex gap-8 p-8 bg-slate-100 md:flex-col md:items-center">
                <div className=" border-black w-3/5 bg-white md:w-11/12">
                    <h1 className="text-xl mx-10 my-2">My cart ({count})</h1>
                    <hr />
                    {
                        all_products.map((item) => {
                            if (cartItems[item.id] > 0) {
                                return (
                                    <div key={item.id} className="flex gap-10 p-4 border-t border-slate-300 sm:flex-wrap sm:justify-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="image">
                                                <img src={item.image} alt="not found" width={100} height={100} />
                                            </div>
                                            <div className="quantity flex gap-2">
                                                <button className="border border-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-2xl" onClick={()=> removeFromCart(item.id)}>-</button>
                                                <h2 className="w-10 border border-black flex items-center justify-center">{cartItems[item.id]}</h2>
                                                <button className="border border-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center text-2xl" onClick={()=> addToCart(item.id)}>+</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="text-xl font-semibold">{item.name}</div>
                                            <div className="flex gap-4 items-center">
                                                <h1 className="text-3xl font-semibold">${item.new_price*cartItems[item.id]}</h1>
                                                <h2 className="text-lg text-decoration-line: line-through text-slate-500">${item.old_price}</h2>
                                                <h2 className="text-lg text-green-500">77% off</h2>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="bg-[#02be47] px-6 py-1 text-xl rounded">Buy</button>
                                                <button className="bg-[#fe3f3b] px-3 py-1 text-xl rounded" onClick={() => removed(item.id)}>Remove</button>
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
                <div className=" w-2/5 py-2 px-6 bg-white flex flex-col gap-4 md:w-11/12">
                    {/* <div> */}
                        <h1 className="text-xl font-semibold ">Total Items</h1>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex justify-between  text-lg">
                                <h2 className="font-medium">Subtotal</h2>
                                <h2>$2940</h2>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg">
                                <h2 className="font-medium">Shipping Fee</h2>
                                <h2>Free</h2>
                            </div>
                            <hr />
                            <div className="flex justify-between text-lg">
                                <h2 className="text-xl font-bold">Total</h2>
                                <h2>${getTotalAmount()}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-xl">Have any promo code? Enter here</h1>
                            <div className="flex gap-2">
                                <input type="text" name="promo" id="promo" placeholder="Enter Promo Code" className="border border-black px-2 md:w-1/2"/>
                                <button className="bg-[#fe3f3b] px-3 py-1 text-xl rounded text-white">Submit</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Cart;