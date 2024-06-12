import React, {useContext} from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const Product = ()=>{
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number (productId));
    return(
        <>
            <div><h1>Product page</h1></div>
            <div>
                
                <div>
                    <img src={product.image} alt="not found" />
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <h1>Add to Cart</h1>
                        </button>
                        <button>Buy</button>
                    </div>
                </div>
                <div></div>
            </div>
            
            
        </>
    )
}

export default Product;