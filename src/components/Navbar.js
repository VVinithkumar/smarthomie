import { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [clickState, setClickState] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleClick = () => {
        setClickState(!clickState);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                <span></span>Smart Homie
            </h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clickState ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clickState ? "nav-menu active" : "nav-menu"}>
                <div style={{ display: "flex", padding: "0px 10px" }}>
                    <li className={`nav-links `} onClick={() => scrollToSection('home-section')}>
                        Home
                    </li>
                    <li className={`nav-links `} onClick={() => scrollToSection('about-section')}>
                        About us
                    </li>
                    <li className={`nav-links `} onClick={() => scrollToSection('contact-section')}>
                        Contact us
                    </li>
                </div>
                <Link to={"/login"}><button>Login</button></Link>
                
            </ul>
        </nav>
    );
}

export default Navbar;
