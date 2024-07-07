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
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState("shop");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    // const [products, setProducts] = useState();

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        setCount((prev)=> prev+1);
    } 

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setCount((prev)=> prev-1);
    }

    const removed = (itemId)=>{
        setCount((prev)=> prev-cartItems[itemId]);
        setCartItems((prev)=>({...prev, [itemId]:0}));
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product)=> product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const logout = () => {
        setToken("");
        setIsLogin(false);
        setIsAdmin(false);
        localStorage.removeItem("site");
    }



    const contextValue = {all_products, cartItems, addToCart, removeFromCart, count, getTotalAmount, removed, menu, setMenu, isAdmin, setIsAdmin, isLogin, setIsLogin, logout, token, setToken}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}












export default ShopContextProvider;