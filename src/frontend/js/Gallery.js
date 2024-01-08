import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Gallery.css"; // Make sure to adjust the path based on your project structure

import img1 from "../../assets/breakfast.jpg";
import img2 from "../../assets/bed1.jpg";
import img3 from "../../assets/bed2.jpg";
import img4 from "../../assets/bed3.jpg";
import img5 from "../../assets/bed4.jpg";


const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container style={{marginTop:50,marginBottom:70}}>
      <Row className="no-gutters">
        <Col>
          <img
            className={`gallery ${isHovered ? "zoom-in" : ""}`}
            src={img1}
            style={{ width: '120%', height: 362, margin: 0 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Col>
        <Col>
          <Row className="no-gutters">
            <img
              className={`gallery ${isHovered ? "zoom-in" : ""}`}
              src={img2}
              style={{ width: '100%', height: 'auto', marginBottom: '10px', marginLeft: '32px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Row>
          <Row className="no-gutters">
            <img
              className={`gallery ${isHovered ? "zoom-in" : ""}`}
              src={img2}
              style={{ width: '100%', height: '183px', marginBottom: '10px', marginLeft: '32px', marginTop: '-7px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Row>
        </Col>
        <Col>
          <Row className="no-gutters">
            <img
              className={`gallery ${isHovered ? "zoom-in" : ""}`}
              src={img3}
              style={{ width: '100%', height: 'auto', marginBottom: '10px', marginLeft: '10px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Row>
          <Row className="no-gutters">
            <img
              className={`gallery ${isHovered ? "zoom-in" : ""}`}
              src={img4}
              style={{ width: '100%', height: '183px', marginBottom: '10px', marginLeft: '10px', marginTop: '-7px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Row>
        </Col>
        <Col>
          <img
            className={`gallery ${isHovered ? "zoom-in" : ""}`}
            src={img5}
            style={{ width: '100%', height: '362px', marginLeft: '-12px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
