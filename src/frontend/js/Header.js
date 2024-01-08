import bannerImage from "../../assets/banner.jpg";
import "../css/Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="image-container">
      <img className="banner-image" src={bannerImage} />
      </div>
      <div className="text-container">
        <h5>Urban </h5>
        <h1 style={{marginTop:-25}}>Vogue </h1>
        <div className="underline" style={{marginTop:-10}}></div>
        <p style={{marginTop:50 }}>
        Discover the epitome of urban sophistication at Urban Vogue . With contemporary design, personalized service, and a prime city-center location, our stylishly appointed suites offer a haven of comfort and luxury for both leisure and business travelers. Immerse yourself in the vibrant energy of the city while enjoying the unparalleled amenities and attentive hospitality that define the Urban Vogue experience.
        </p>
        <button style={{marginTop:30}}>Read more</button>
        <hr style={{marginTop:25}}/><br/>
      </div>
    </div>
  );
};

export default Header;
