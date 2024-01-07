import breakfast from "../../assets/breakfast.jpg";
import tea from "../../assets/tea.jpg";
import "../css/Offer.css";
import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img className="banner-image" src={breakfast} />
        <div className="text-container">
          <h2>Vogue Suites Breakfast</h2>
          <div className="underline"></div>
          <p>
            Start your day with a delectable breakfast experience, where an
            array of fresh and flavorful options awaits to energize 
          </p>
          <button>Click Me</button>
          <hr />
        </div>
      </div>

      <div className="image-container">
        <img className="banner-image" src={tea} />
        <div className="text-container">
          <h2>Vogue Suites Tea</h2>
          <div className="underline"></div>
          <p>
            "Sip serenity with our exquisite selection of teas, where each
            aromatic brew unfolds a moment of tranquility in every cup."
          </p>
          <button>
            <Link to="/booking" style={{textDecoration:'none',color:'white'}}>Click Me</Link>
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Offer;
