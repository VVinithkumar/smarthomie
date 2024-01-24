import React from "react";
import "./Admin.css"
import { VscAccount } from "react-icons/vsc";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
 const Admin=()=>
 {
    return(
        <>
        <Navbar/>
         <div className="full">
        <div class="container">
              <div class="brand-logo"><VscAccount size={100} /></div>
              <div class="brand-title">ADMIN LOGIN</div>
           <div class="inputs">
              <label className="ll">ADMIN ID</label>
                <input className="in" type="email" placeholder="Enter ID number" />
              <label className="ll">PASSWORD</label>
                <input className="in" type="password" placeholder="Enter the password" />
             <Link style={{textDecoration:"none"}} to={"/List"}><button className="btn3" type="submit">LOGIN</button></Link> 
           </div>
         </div>
         </div>
        </>
    )
 }
 export default Admin;