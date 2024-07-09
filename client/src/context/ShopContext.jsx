import React, {createContext, useEffect, useState} from "react";
//import all_products from '../components/assets/all_products';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i =0; i<300+1;i++){
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [all_products, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart);
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState("shop");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem('isLogin');
        return saved === 'true' ? true : false;
    });
    useEffect(() => {
        localStorage.setItem('isLogin', isLogin);
    }, [isLogin]);
    
    const [token, setToken] = useState(localStorage.getItem("site") || "");

    useEffect(()=>{
        fetch("http://localhost:5000/allProducts")
        .then(response => response.json())
        .then((data)=>{
            setAllProducts(data);
        })
    },[])

    const addToCart = (itemId)=>{

        if(localStorage.getItem("site")){
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            setCount((prev)=> prev+1);
            fetch("http://localhost:5000/addtocart",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'token': `${localStorage.getItem("site")}`,
                },
                body: JSON.stringify({"itemId": itemId}),
            })
            .then(response => response.json())
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.log("error in fetch is ", error);
            })
        }
        else{
            console.log("Please login first");
        }
        
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