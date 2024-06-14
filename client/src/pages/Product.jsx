import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTag, faStar, faStarHalfStroke, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
const Product = () => {
    const { all_products, addToCart } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));
    return (
        <div className="p-4">
            <div className="flex ">

                <div className="flex flex-col items-center gap-4 w-2/5">
                    <img src={product.image} alt="not found" width={450} />
                    <div className="flex gap-2">
                        <button className="bg-[#f7b030] flex gap-1 items-center text-xl px-5 py-2 rounded" onClick={()=>{addToCart(product.id)}}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <h1>Add to Cart</h1>
                        </button>
                        <button className="bg-[#eb423f] px-10 py-2 text-xl rounded">Buy</button>
                    </div>
                </div>

                <div className="w-3/5 flex flex-col gap-4">
                    <div className="title">
                        <h2 className="text-lg text-slate-500">Metronaut</h2>
                        <h1 className="text-xl">{product.name}</h1>
                        <FontAwesomeIcon icon={faStar} className="text-orange-600"/>
                        <FontAwesomeIcon icon={faStar} className="text-orange-600"/>
                        <FontAwesomeIcon icon={faStar} className="text-orange-600"/>
                        <FontAwesomeIcon icon={faStar} className="text-orange-600"/>
                        <FontAwesomeIcon icon={faStarHalfStroke} className="text-orange-600"/>
                    </div>

                    <div className="price">
                        <p className="text-lg text-green-500">Special price</p>
                        <div className="flex gap-4 items-center">
                            <h1 className="text-3xl font-semibold">${product.new_price}</h1>
                            <h2 className="text-lg text-decoration-line: line-through text-slate-500">${product.old_price}</h2>
                            <h2 className="text-lg text-green-500">77% off</h2>
                        </div>
                    </div>

                    <div className="sizes flex gap-4">
                        <h2 className="text-lg">Sizes</h2>
                        <div className="flex gap-4">
                            <div className="border border-slate-400 px-3 py-1 text-xl font-medium hover:bg-gray-300 cursor-pointer">S</div>
                            <div className="border border-slate-400 px-3 py-1 text-xl font-medium hover:bg-gray-300 cursor-pointer">M</div>
                            <div className="border border-slate-400 px-3 py-1 text-xl font-medium hover:bg-gray-300 cursor-pointer">L</div>
                            <div className="border border-slate-400 px-2 py-1 text-xl font-medium hover:bg-gray-300 cursor-pointer">XL</div>
                        </div>
                    </div>

                    <div className="offers">
                        <h1 className="text-xl font-medium">Available Offers</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center text-lg">
                                <FontAwesomeIcon icon={faTag} className="text-green-500" />
                                <h2><b>Bank Offer</b> Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C</h2>
                            </div>
                            <div className="flex gap-2 items-center text-lg">
                                <FontAwesomeIcon icon={faTag} className="text-green-500" />
                                <h2><b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank CardT&C</h2>
                            </div>
                            <div className="flex gap-2 items-center text-lg">
                                <FontAwesomeIcon icon={faTag} className="text-green-500" />
                                <h2><b>Bank Offer</b> 10% off up to ₹750 on OneCard Credit Card Transactions on orders of ₹7,500 and aboveT&C</h2>
                            </div>
                            <div className="flex gap-2 items-center text-lg">
                                <FontAwesomeIcon icon={faTag} className="text-green-500" />
                                <h2><b>Special price</b> Get at flat ₹340T&C</h2>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="Q-ans flex flex-col gap-4">
                        <h1 className="text-xl font-semibold">Question and Answers</h1>
                        <div className="flex flex-col gap-4">
                            <div>
                                <h1 className="text-xl font-medium">Q: Is it cotton?</h1>
                                <h2>A: Yes, It is pure cotton</h2>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <div>
                                    <h3>SheynFashion</h3>
                                    <h3>E-Cart seller</h3>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <FontAwesomeIcon icon={faThumbsUp} /> 8
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faThumbsDown} /> 1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product;