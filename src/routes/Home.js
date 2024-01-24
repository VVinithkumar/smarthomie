
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <div id="home-section" >
          <Hero
            cName="img"
            heroImg="https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div id="about-section" >
          <About />
        </div>
        <div id="contact-section" >
          <Contact />
        </div>
      </div>
    </>

  );
}
export default Home;