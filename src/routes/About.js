import { ForwardedRef, forwardRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/1.jpg.jpg"
import "./About.css";
function About() {
  return (
    <>
      <div className="About">
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          text="About"
        />
      </div>

    </>
  );
}
export default forwardRef(About);