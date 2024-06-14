import React from "react";

const Cart = ()=>{
    return(
        <>
            <div className="flex gap-8 p-8 bg-slate-100">
                <div className="border-2 border-black w-3/5">
                    <h1>My cart</h1>
                    <div>
                        <div>Image div</div>
                        <div>Details</div>
                    </div>
                </div>
                <div className="border-2 border-red-600 w-2/5">
                    <h1>Total Items</h1>
                </div>
            </div>
        </>
    )
}

export default Cart;