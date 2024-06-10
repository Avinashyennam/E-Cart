import React, {useState, useEffect} from "react";

const Login = ()=>{

    const [userdata, setUserdata] = useState({
        name:"",
        email:"",
        password:""
    })
    console.log(userdata);
    return(
        <>
            <div>
                <div className="text-3xl">
                    <h1>Welcome to E-CART</h1>
                </div>
                <div>
                    <form className="flex flex-col gap-4">
                        <input type="text" name="name" value={userdata.name} placeholder="Enter name" onChange={(e)=>setUserdata(e.target.value)}/>
                        <input type="email" name="email" value={userdata.email} placeholder="Enter Email" onChange={(e)=>setUserdata(e.target.value)}/>
                        <input type="password" name="password" value={userdata.password} placeholder="Enter Password" onChange={(e)=>setUserdata(e.target.value)}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;