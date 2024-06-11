import React, {useState, useEffect} from "react";
import './pages.css';
const Login = ()=>{

    const [userdata, setUserdata] = useState({
        name:"",
        email:"",
        password:""
    })
    console.log(userdata);
    return(
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <div className="text-3xl">
                    <h1>Welcome to E-CART</h1>
                </div>
                <div className="w-2/5">
                    <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg">
                        <input type="text" name="name" value={userdata.name} placeholder="Enter name" onChange={(e)=>setUserdata(e.target.value)}/>
                        <input type="email" name="email" value={userdata.email} placeholder="Enter Email" onChange={(e)=>setUserdata(e.target.value)}/>
                        <input type="password" name="password" value={userdata.password} placeholder="Enter Password" onChange={(e)=>setUserdata(e.target.value)}/>
                        <button className="bg-white text-black text-xl w-28 p-1 rounded-lg">submit</button>
                        <h1>Already have an account? <span className="text-blue-700">Click </span>here to login</h1>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;