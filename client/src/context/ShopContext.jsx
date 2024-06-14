import React, {createContext, useState} from "react";
import all_products from '../components/assets/all_products';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i =0; i<all_products.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart);
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log("After adding cart are ",cartItems);
    }

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updatedItems = {...prev, [itemId]: (prev[itemId] || 0) + 1};
    //         console.log("Updated cart items: ", updatedItems);
    //         return updatedItems;
    //     });
    //     console.log(cartItems);
    //     alert("Item added into cart");
    // };
    

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;