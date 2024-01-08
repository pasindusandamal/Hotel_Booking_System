import React, { useState } from "react";
import "../css/Room.css"; // Import the external CSS file
import bed1 from "../../assets/bed1.jpg"; // Replace with your actual image paths
import bed2 from "../../assets/bed2.jpg";
import bed3 from "../../assets/bed3.jpg";
import {Link} from 'react-router-dom'
const Room = () => {
  const [selectedImage, setSelectedImage] = useState(bed1);
  const [displayText, setDisplayText] = useState("");
  const [showBookNow, setShowBookNow] = useState(false);

  const handleButtonClick = (image, text) => {
    setSelectedImage(image);
    setDisplayText(text);
    setShowBookNow(true);
  };

  const handleBookNowClick = () => {
   
    console.log("Book Now clicked");
  };

  return (
    <div className="Container" style={{ position: "relative" }}>
      <img className="Image" src={selectedImage} alt="Your Image Alt Text" />
      <div className="ButtonContainer">
        <button
          className="Button"
          onClick={() =>
            handleButtonClick(
              bed1,
              <>
                <span style={{ marginLeft: "5px" }}>
                  Standard Room <br />{" "}
                  <span style={{ marginLeft: "5px" }}>
                    A basic room with essential amenities, suitable for single
                    or double occupancy.
                  </span>{" "}
                </span>
              </>
            )
          }
        >
          Standard Room
        </button>

        <button
          className="Button"
          onClick={() =>
            handleButtonClick(
              bed2,
              <>
                <span style={{ marginLeft: "5px" }}>
                  DELUXE ROOM <br />{" "}
                  <span style={{ marginLeft: "5px" }}>
                    Experience the epitome of comfort and sophistication in our
                    Delux Rooms at Urban Vogue Suites.
                  </span>{" "}
                </span>
              </>
            )
          }
        >
          Delux Room
        </button>

        <button
          className="Button"
          onClick={() =>
            handleButtonClick(
             bed3,
              <>
                <span style={{ marginLeft: "5px" }}>
                  Suite <br />{" "}
                  <span style={{ marginLeft: "5px" }}>
                    A larger and more luxurious room with separate living and
                    sleeping areas, catering to guests looking for extra comfort
                    and space.
                  </span>{" "}
                </span>
              </>
            )
          }
        >
          Suite
        </button>
      </div>
      {showBookNow && (
        <div
          className="TextContainer"
          style={{
            position: "absolute",
            bottom: 15,
            left: 0,
            right: 0,
            textAlign: "left",
            color: "#fff",
          }}
        >
          <p>{displayText}</p>
          <button className="Button-1" onClick={handleBookNowClick}>
           <Link to ="/booking" style={{ textDecoration:'none',color:'white'}}> Book Now</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Room;
