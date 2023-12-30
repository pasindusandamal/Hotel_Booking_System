import bannerImage from "../../assets/banner5.jpg";
import "../css/Banner.css";
import React from "react";

const Banner = () => {
  return (
    <div>
      <img className="banner-image" src={bannerImage} />
      <div className="text-overlay">
        <h1>Welcome to Viwer Bird Villa</h1>
        <p>Explore and discover amazing things!</p>
        <div className="button-container">
          <button className="book-now-button-1">Book Now</button>
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
