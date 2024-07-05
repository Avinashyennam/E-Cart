import React, { useState, useEffect, useContext } from "react";
import './pages.css';
import { ShopContext } from "../context/ShopContext";
const Login = () => {

    const [signupdata, setSignupdata] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        category: ""
    });
    const [login, setLogin] = useState(true);
    console.log(loginData);
    console.log(signupdata);
    const {isAdmin, setIsAdmin} = useContext(ShopContext)
    const handleLogin = async () => {
        e.preventDefault();
        try {
            if (loginData.category === 'Admin') {
                const response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                if (response.ok) {
                    console.log("Login Successful");
                    console.log(response.user);
                    setIsAdmin(true);
                    console.log(isAdmin);
                }
            }
            else {
                const response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                if (response.ok) {
                    console.log("Login Successful");
                    console.log(response.user);
                    setIsAdmin(false);
                    console.log(isAdmin);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupdata)
            })
            if (response.ok) {
                console.log("Login Successful")
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <div className="text-3xl">
                    <h1>Welcome to E-CART</h1>
                </div>
                <div className="sm: w-3/5 2xl:w-2/5">

                    {(login == true) ?
                        <div>
                            <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4">
                                <input type="email" name="email" value={loginData.email} placeholder="Enter Email" onChange={(e) => setLoginData(e.target.value)} />
                                <input type="password" name="password" value={loginData.password} placeholder="Enter Password" onChange={(e) => setLoginData(e.target.value)} />
                                <div className="flex gap-2">
                                    <label><input type="radio" value="Admin" name="category" onChange={(e) => setLoginData(e.target.value)} /> Admin</label>
                                    <label><input type="radio" value="User" name="category" onChange={(e) => setLoginData(e.target.value)} />User</label>
                                </div>
                                <button type="submit" className="bg-white text-black text-xl w-28 p-1 rounded-lg" onClick={handleLogin}>Login</button>
                                <h1 className="text-xl">Didn't have an account? <span className="text-blue-700 cursor-pointer" onClick={() => setLogin(!login)}>Click </span>here to Signup</h1>
                            </form>
                        </div> :
                        <div>
                            <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4" onSubmit={handleSignUp}>
                                <input type="text" name="name" value={signupdata.name} placeholder="Enter name" onChange={(e) => setSignupdata(e.target.value)} />
                                <input type="email" name="email" value={signupdata.email} placeholder="Enter Email" onChange={(e) => setSignupdata(e.target.value)} />
                                <input type="password" name="password" value={signupdata.password} placeholder="Enter Password" onChange={(e) => setSignupdata(e.target.value)} />
                                <button className="bg-white text-black text-xl w-28 p-1 rounded-lg">Continue</button>
                                <h1 className="text-xl">Already have an account? <span className="text-blue-700 cursor-pointer" onClick={() => setLogin(!login)}>Click </span>here to login</h1>
                            </form>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default Login;