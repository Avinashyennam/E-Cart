import React, {useState, useEffect} from "react";
import './pages.css';
const Login = ()=>{

    const [signupdata, setSignupdata] = useState({
        name:"",
        email:"",
        password:""
    });
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    });
    const [login, setLogin] = useState(true);
    console.log(loginData);
    console.log(signupdata);

    const handleLogin = async()=>{
        e.preventDefault();
        try {
            const response = await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })
            if(response.ok)
            {
                console.log("Login Successful")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSignUp = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupdata)
            })
            if(response.ok)
            {
                console.log("Login Successful")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <div className="text-3xl">
                    <h1>Welcome to E-CART</h1>
                </div>
                <div className="w-2/5 sm:w-full">

                    {(login == true)?
                    <div>
                        <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4" onSubmit={handleLogin}>
                            <input type="email" name="email" value={loginData.email} placeholder="Enter Email" onChange={(e)=>setLoginData(e.target.value)}/>
                            <input type="password" name="password" value={loginData.password} placeholder="Enter Password" onChange={(e)=>setLoginData(e.target.value)}/>
                            <button className="bg-white text-black text-xl w-28 p-1 rounded-lg">Login</button>
                            <h1 className="text-xl">Didn't have an account? <span className="text-blue-700 cursor-pointer" onClick={()=>setLogin(!login)}>Click </span>here to Signup</h1>
                        </form>
                    </div>:
                    <div>
                        <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4" onSubmit={handleSignUp}>
                            <input type="text" name="name" value={signupdata.name} placeholder="Enter name" onChange={(e)=>setSignupdata(e.target.value)}/>
                            <input type="email" name="email" value={signupdata.email} placeholder="Enter Email" onChange={(e)=>setSignupdata(e.target.value)}/>
                            <input type="password" name="password" value={signupdata.password} placeholder="Enter Password" onChange={(e)=>setSignupdata(e.target.value)}/>
                            <button className="bg-white text-black text-xl w-28 p-1 rounded-lg">Continue</button>
                            <h1 className="text-xl">Already have an account? <span className="text-blue-700 cursor-pointer" onClick={()=>setLogin(!login)}>Click </span>here to login</h1>
                        </form>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Login;