import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/ABC.css";
import { Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";

const ABC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Use queryParams to get the values
  const adults = queryParams.get("adults");
  const kids = queryParams.get("kids");
  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const selectedValue = queryParams.get("selectedValue"); // Add this line

  return (
    <Container style={{ borderTop: "1px solid #ddd" }}>
      <Row style={{ marginTop: 20 }}>
        <p style={{ textAlign: "center" }}>Summery<br/><br/></p>
        <Col
          lg={6}
          className="vertical-line"
          style={{ width: 400, margin: 10 }}
        >
          Your Reservation <br />
          <br />
          <br />
          <Row style={{ fontSize: 14 }}>
            <Col>
              <p>Adults: {adults}</p>
            </Col>
            <Col>
              <p>Kids: {kids}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p style={{ fontSize: 14 }}> Check-Out Date: </p>
            </Col>
            <Col>
              <p> {checkOut}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              {" "}
              <p style={{ fontSize: 14 }}>Check-In Date:</p>
            </Col>
            <Col>
              <p>{checkIn}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="selected-value" style={{ fontSize: 14 }}>
                Selected Value:
              </p>
            </Col>
            <Col> {selectedValue}</Col>
          </Row>
          {/* Add this line */}
          <hr />
          <p style={{ fontSize: 14 }}>Tax</p>
          <hr />
          <p style={{ fontSize: 14 }}>Total</p>
          <hr />
          <div style={{ fontSize: 14 }}>
            <p>Special Requests</p>
            <div style={{ fontSize: 12 }}>+ Another Request</div>
          </div>
        </Col>
        <Col
          lg={4}
          className="vertical-line"
          style={{ fontSize: 14, textAlign: "center", width: 400 }}
        >
          Not Ready to Book Yet <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            We have saved your search.Receive an email with a link back to your
            search
            <br />
            <br />
            <Form className="text-center">
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ borderRadius: "0" }}
                />
              </Form.Group>
              <br />
              <Button variant="primary" style={{ borderRadius: "0" }}>
                Subscribe
              </Button>
            </Form>
          </p>
        </Col>
        <Col
          lg-={2}
          className=""
          style={{ width: 400, margin: 20, textAlign: "center" }}
        >
          Paymenth Method
          <br />
          <br />
          <FontAwesomeIcon
            icon={faCcVisa}
            size="2x"
            color="grey"
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <FontAwesomeIcon icon={faCcStripe} size="2x" color="grey" />
          <br />
          <br />
          <Button variant="primary" style={{ borderRadius: "0" }}>
            Pay Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ABC;
