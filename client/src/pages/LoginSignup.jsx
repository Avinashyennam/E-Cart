import React, { useState, useEffect, useContext } from "react";
import './pages.css';
import { ShopContext } from "../context/ShopContext";
const Login = () => {

    const [viewlogin, setLogin] = useState(true);
    const {isAdmin, setIsAdmin} = useContext(ShopContext);
    const {isLogin, setIsLogin} = useContext(ShopContext);
    const {token, setToken} = useContext(ShopContext);

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

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLoginData({
            ...loginData,
            [name]:value,
        });
        //console.log(loginData);
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (loginData.category === 'admin') {
                let response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                if (response.ok) {
                    console.log("Login Successful");
                    let responseData = await response.json();
                    //console.log(responseData);
                    localStorage.setItem("site", responseData.token);
                    setIsAdmin(true);
                    setIsLogin(true);
                }
                else{
                    alert("User not found");
                    let responseData = await response.json();
                    console.log(responseData);
                }
            }
            else {

                let response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                if (response.ok) {
                    console.log("Login successful");
                    let responseData = await response.json();
                    localStorage.setItem("site", responseData.token);
                    setIsLogin(true);
                }
                else{
                    alert("User not found");
                    let responseData = await response.json();
                    console.log(responseData);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        console.log(loginData);
    },[loginData]);

    const handleSignupChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setSignupdata({
            ...signupdata,
            [name]: value,
        })
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupdata)
            })
            if (response.ok) {
                console.log("signup Successful");
                let responseData = await response.json();
                //console.log(responseData);
                localStorage.setItem("site", responseData.token);
                setIsLogin(true);
            }
            else{
                alert("User already exists");
                let responseData = await response.json();
                console.log(responseData);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    
    useEffect(()=>{
        console.log("is login inside of useEffect ",isLogin);
    },[isLogin]);

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <div className="text-3xl">
                    <h1>Welcome to E-CART</h1>
                </div>
                <div className="sm: w-3/5 2xl:w-2/5">

                    {(viewlogin == true) ?
                        <div>
                            <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4">
                                <input type="email" name="email" value={loginData.email} placeholder="Enter Email" onChange={handleChange} />
                                <input type="password" name="password" value={loginData.password} placeholder="Enter Password" onChange={handleChange} />
                                <div className="flex gap-2">
                                    <label><input type="radio" value="admin" name="category" onChange={handleChange} /> Admin</label>
                                    <label><input type="radio" value="user" name="category" onChange={handleChange} />User</label>
                                </div>
                                <button type="button" className="bg-white text-black text-xl w-28 p-1 rounded-lg" onClick={handleLogin}>Login</button>
                                <h1 className="text-xl">Didn't have an account? <span className="text-blue-700 cursor-pointer" onClick={() => setLogin(!viewlogin)}>Click </span>here to Signup</h1>
                            </form>
                        </div>
                        :
                        <div>
                            <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4" onSubmit={handleSignUp}>
                                <input type="text" name="name" value={signupdata.name} placeholder="Enter name" onChange={handleSignupChange} />
                                <input type="email" name="email" value={signupdata.email} placeholder="Enter Email" onChange={handleSignupChange} />
                                <input type="password" name="password" value={signupdata.password} placeholder="Enter Password" onChange={handleSignupChange} />
                                <button className="bg-white text-black text-xl w-28 p-1 rounded-lg">Continue</button>
                                <h1 className="text-xl">Already have an account? <span className="text-blue-700 cursor-pointer" onClick={() => setLogin(!viewlogin)}>Click </span>here to login</h1>
                            </form>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default Login;