import React from "react";
import "./Categories.css";
import Navbar from "../components/Navbar";

const Categories=()=>
{
    return(
        <>
        <Navbar/>
            <div className="Cg-bar">
                <div className="Cg-cls">
                    <br></br>
                    <p>ADD CATEGORIES</p>
                    <br></br>
                    <hr></hr>
                    <p id="Add-cg">Add Categories :</p>
                    <input id="in-cg"></input>
                     <button id="cg-btn">ADD</button>
                </div>
                <div className="tb-cg">
                     <p id="tb-head">List of Categories</p>
                </div>
            </div>  
        </>
    )
}
export default Categories;