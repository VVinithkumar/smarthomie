import { Link } from "react-router-dom";
import "./HeroStyles.css";
function Hero (props) {
    return(
      <>
      <div class="login-container">
        <form>
            <label>Category</label>
                      <select class="form-control" id="category">
                        <option value="a">Electronics Repair & services</option>
                        <option value="b">Home Renovation & Repair</option>
                        <option value="c">Cleaning & PestControl</option>
                      </select>
            <label>Location</label><br />
                      <select class="form-control" id="category">
                        <option value="a">Chennai</option>
                        <option value="b">Coimbatore</option>
                        <option value="c">Madurai</option>
                      </select><br/>
            <label>Type</label><br />
                      <select>
                        <option value="a">Ac</option>
                        <option value="b">Tv</option>
                        <option value="c">Pc</option>
                      </select>
                      <br></br>
                      <br></br>
           <Link to={"/Searchpage"}> <button type="submit">Search Now</button></Link>
        </form>
    </div>
      <div>
        <img alt="" src={props.heroImg} />
      </div>
      
      </>
    );
}

export default Hero;