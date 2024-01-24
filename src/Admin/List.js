import React from "react";
import "./List.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const List=()=>
{
    return(
        <>
        <Navbar/>
          <Link style={{textDecoration:"none"}} to={"/Categories"}><button className="btn4">Categories Management</button></Link>   
          <Link style={{textDecoration:"none"}} to={"/Services"}><button className="btn5">  Services   Management </button></Link>   
        </>
    )
}
export default List;