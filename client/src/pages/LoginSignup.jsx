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
        console.log(loginData);
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (loginData.category === 'admin') {
                await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                .then(response => response.json())
                .then((data)=>{
                    console.log(data);
                    localStorage.setItem("site", data.token);
                    console.log("signup Successful");
                    setIsLogin(true);
                    console.log("is login inside of fetch ",isLogin);
                    setIsAdmin(true);
                    console.log(isAdmin);
                })
                // if (response.ok) {
                //     console.log("Login Successful");
                //     console.log(response.user);
                //     setIsAdmin(true);
                //     setIsLogin(true);
                //     console.log(isLogin);
                //     console.log(isAdmin);
                // }
            }
            else {

                await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                })
                .then(response => response.json())
                .then((data)=>{
                    console.log(data);
                    localStorage.setItem("site", data.token);
                    console.log("signup Successful");
                    setIsLogin(true);
                    console.log("is login inside of fetch ",isLogin);
                    console.log(isAdmin);
                    //window.location.href = '/';
                })
                // let response = await fetch("http://localhost:5000/login", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(loginData)
                // })
                // response.then(resp=> resp.json())
                // .then((data)=> console.log(data));
                // if (response.ok) {
                //     console.log(response.ok);
                //     console.log("Login Successful");
                //     console.log(response);
                //     setIsAdmin(false);
                //     console.log(isAdmin);
                // }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        console.log("is login inside of useEffect ",isLogin);
    },[isLogin]);

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

    useEffect(()=>{
        console.log(loginData);
    },[loginData]);

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
                        </div> :
                        <div>
                            <form className="login-form flex flex-col justify-center items-center gap-4 border p-10 rounded-lg sm:p-4" onSubmit={handleSignUp}>
                                <input type="text" name="name" value={signupdata.name} placeholder="Enter name" onChange={(e) => setSignupdata(e.target.value)} />
                                <input type="email" name="email" value={signupdata.email} placeholder="Enter Email" onChange={(e) => setSignupdata(e.target.value)} />
                                <input type="password" name="password" value={signupdata.password} placeholder="Enter Password" onChange={(e) => setSignupdata(e.target.value)} />
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