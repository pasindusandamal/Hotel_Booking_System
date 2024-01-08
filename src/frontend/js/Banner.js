import bannerImage from "../../assets/banner5.jpg";
import "../css/Banner.css";
import React from "react";
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <img className="banner-image" src={bannerImage} />
      <div className="text-overlay">
        <h1>Welcome to Urban Vogue </h1>
        <p>Explore and discover amazing things!</p>
        <div className="button-container">
          <button className="book-now-button-1"><Link to="/booking" style={{textDecoration:'none',color:'white'}}>Book Now</Link></button>
          <button className="explore-button" >Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
