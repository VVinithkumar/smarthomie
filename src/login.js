import React from "react";
import "./login.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <>
        <div className="totalform">
        <Navbar/>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className="Loginfrom">
           <p>Login</p>
           <label for="username">Username</label>
              <input type="text" placeholder="Email or Phone" id="username"/>
           <label for="password">Password</label>
              <input type="password" placeholder="Password" id="password"/>
            <h4>Forget Password</h4>
        <button className="btn1">Log In</button>
        <Link to={"/Admin"}><button className="btn2">Switch to Admin</button></Link>
        <h5>Didn't have an account ? <Link to={"/Signin"} style={{textDecoration:"none"}}>Sign up</Link></h5>
        </form>
        </div>
        </>
    )
}
export default Login;