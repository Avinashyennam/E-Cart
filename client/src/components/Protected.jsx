import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Protected = ()=>{
    const {isAdmin} = useContext(ShopContext);
    if(isAdmin === true){
        return <Outlet />;
    }
}
export default Protected;