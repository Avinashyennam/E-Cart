import React from "react";
import './popular.css';
const Offers = () => {
    return (
        <>
            <div className="popular flex flex-col items-center">
                <h1 className='text-6xl font-bold my-4'>Hot Deals</h1>
                <div className="flex gap-16 items-center">
                    <img src="/Offers_img.png" alt="not found" width={480} />
                    <div className="text flex flex-col gap-4">
                        <h1 className='heading text-7xl w-[75%] font-bold'>Unbeatable Savings</h1>
                        <h3 className='desc text-2xl w-[75%] font-medium'>Discover Our exclusive deals and enjoy upto 50% off on top-rates products. Limited time only - don't miss out!</h3>
                        <div className='bg-red-500 px-3 py-2 rounded-lg w-1/5 text-center'>
                            <button className='text-xl text-white'>Explore Offers</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers;