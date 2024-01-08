import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../css/Accommodation.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/bed2.jpg";
import img2 from "../../assets/bed3.jpg";
import img3 from "../../assets/bed4.jpg";
import img4 from "../../assets/bed5.jpg";

const Accommodation = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adults = queryParams.get("adults");
  const kids = queryParams.get("kids");
  const checkInDate = queryParams.get("checkIn");
  const checkOutDate = queryParams.get("checkOut");
  const selectedValue1 = 600;
  const selectedValue2 = 650;
  const selectedValue3 = 550;
  const selectedValue4 = 700;
  const handleProceed = () => {
    // Use the Link component to navigate and pass data
    navigate(`/frm?selectedValue=${selectedValue4}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`);
  };
  

  return (
    <div>
      <Container>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Luxary Twin
            </h3>
          </div>
          <Col>
            <img src={img1} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Luxary Twin</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
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
                  <div>$600.00</div>
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
            <Link
              to={`/abc?selectedValue=${selectedValue1}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                $ 600.00 | Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Delux
            </h3>
          </div>
          <Col>
            <img src={img2} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Delux</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
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
            <Link
              to={`/abc?selectedValue=${selectedValue2}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                $ 650.00 | Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
             Panaromic Twin
            </h3>
          </div>
          <Col>
            <img src={img3} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Panoramic Twin</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
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
            <Link
              to={`/abc?selectedValue=${selectedValue3}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                $ 550.00 | Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 50 }}>
        <Row>
          <div className="top-line">
            <h3 style={{ fontSize: 12, margin: 5, color: "white" }}>
              Panaromic
            </h3>
          </div>
          <Col>
            <img src={img4} alt="Room" className="room-image" />
          </Col>

          <Col style={{ marginTop: 15 }}>
            <h3 style={{ fontSize: 16 }}>Panoramic</h3>
            <h4 style={{ fontSize: 13, marginTop: 20 }}>3 Occupants max</h4>

            <h2 style={{ fontSize: 13, textAlign: "justify", marginTop: 15 }}>
              A hotel is a commercial establishment that provides lodging
              accommodations, typically on a short-term basis. Hotels offer a
              range of services and amenities to cater to the needs of travelers
              and guests, including rooms or suites with varying levels of
              luxury and comfort.{" "}
            </h2>
            <h4 style={{ fontSize: 13, marginTop: 35 }}>
              <u>View Room Details</u>
            </h4>
          </Col>
          <Col style={{ marginTop: 15, fontSize: 13, marginLeft: 5 }}>
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
            <Link
              to={`/abc?selectedValue=${selectedValue4}&adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              <button className="book-now-button" onClick={handleProceed}>
                $ 700.00 | Book Now
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accommodation;
