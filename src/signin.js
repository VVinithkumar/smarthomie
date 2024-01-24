import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const signin=()=>{
    return(
        <>
        <Navbar/>
       <div className="signin">
        <form className="from">
           <p>Register</p>
           <label className="heading" for="username">Username</label>
              <input type="text" placeholder="Enter the Username" id="username"/>
           <label className="heading" for="password">Email</label>
              <input type="password" placeholder="Enter the email" id="password"/>
           <label className="heading" for="password">Phone No</label>
              <input type="password" placeholder="Enter the Phone No" id="password"/>
           <label className="heading" for="password">Password</label>
              <input type="password" placeholder="Enter the Password" id="password"/>
           <label className="heading" for="password"> Confirm Password</label>
              <input type="password" placeholder="Confirm password" id="password"/>
            <button className="btn5">Register</button>
           <p id="bottom">Already have an account ? <Link style={{textDecoration:"none"}} to={"/Login"}>Login here</Link></p>
        </form>
        </div>
        </>
    )
}
export default signin;