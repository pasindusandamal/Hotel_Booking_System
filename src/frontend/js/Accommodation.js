import React from "react";
import "../css/Accommodation.css"; // Make sure to create a CSS file for additional styling
import { Form } from "react-router-dom";
import img1 from "../../assets/bed2.jpg";
import img2 from "../../assets/bed3.jpg";
import img3 from "../../assets/bed4.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const accommodation = ({}) => {
  return (
    <div>
      <Container>
        <Row>
          <div className="top-line"><h3 style={{fontSize:12, margin:5, color:"white"}}>Luxary Twin</h3></div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>
         
          <Col style={{marginTop:15}}>
            <h3 style={{fontSize:16}}>Luxary Twin</h3>
            <h4 style={{fontSize:13,marginTop:20}}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify" ,marginTop:15}}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{fontSize:13,marginTop:35}}><u>View Room Details</u></h4>
          </Col>
          <Col style={{marginTop:15, fontSize:13,marginLeft:5}}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <button className="book-now-button" >$ 616.32 | Book Now</button>
          </Col>
        </Row>
      </Container>

      <Container style={{marginTop:50}}>
        <Row>
          <div className="top-line"><h3 style={{fontSize:12, margin:5, color:"white"}}>Luxary Twin</h3></div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>
         
          <Col style={{marginTop:15}}>
            <h3 style={{fontSize:16}}>Delux</h3>
            <h4 style={{fontSize:13,marginTop:20}}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify" ,marginTop:15}}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{fontSize:13,marginTop:35}}><u>View Room Details</u></h4>
          </Col>
          <Col style={{marginTop:15, fontSize:13,marginLeft:5}}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <button className="book-now-button" >$ 616.32 | Book Now</button>
          </Col>
        </Row>
      </Container>

      <Container style={{marginTop:50}}>
        <Row>
          <div className="top-line"><h3 style={{fontSize:12, margin:5, color:"white"}}>Luxary Twin</h3></div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>
         
          <Col style={{marginTop:15}}>
            <h3 style={{fontSize:16}}>Panoramic Twin</h3>
            <h4 style={{fontSize:13,marginTop:20}}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify" ,marginTop:15}}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{fontSize:13,marginTop:35}}><u>View Room Details</u></h4>
          </Col>
          <Col style={{marginTop:15, fontSize:13,marginLeft:5}}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <button className="book-now-button" >$ 616.32 | Book Now</button>
          </Col>
        </Row>
      </Container>

      <Container style={{marginTop:50}}>
        <Row>
          <div className="top-line"><h3 style={{fontSize:12, margin:5, color:"white"}}>Luxary Twin</h3></div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>
         
          <Col style={{marginTop:15}}>
            <h3 style={{fontSize:16}}>Panoramic</h3>
            <h4 style={{fontSize:13,marginTop:20}}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify" ,marginTop:15}}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{fontSize:13,marginTop:35}}><u>View Room Details</u></h4>
          </Col>
          <Col style={{marginTop:15, fontSize:13,marginLeft:5}}>
            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col>
                {" "}
                <input
                  type="radio"
                  name="roomType"
                  value="roomOnly"
                  style={{ marginRight: 5 }}
                />
                Sale: Room Only ++{" "}
              </Col>
              <Col style={{ textAlign: "right" }}>
                {" "}
                <div>
                  <del>$856.00</del>
                  <br />
                  <div>$616.32</div>
                </div>
              </Col>
              <hr />
            </Row>
            <button className="book-now-button" >$ 616.32 | Book Now</button>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default accommodation;
