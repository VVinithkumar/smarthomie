import "./styles.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./login";
import Admin from "./Admin/Admin"
import List from "./Admin/List"
import Categories from "./Admin/Categories";
import Services from "./Admin/Services";
import Searchpage from "./components/Searchpage"
import Signin from "./signin";


export default function App(){
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact"element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/searchpage" element={<Searchpage/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
            
        </div>
        
    );
}
