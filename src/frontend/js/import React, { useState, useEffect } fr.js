import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";

export default function FormPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [adults, setAdults] = useState(queryParams.get("adults") || "");
  const [kids, setKids] = useState(queryParams.get("kids") || "");
  const [selectedValue, setSelectedValue] = useState(
    queryParams.get("selectedValue") || ""
  );
  const [checkIn, setCheckInDate] = useState(
    queryParams.get("checkIn") || ""
  );
  const [checkOut, setCheckOutDate] = useState(
    queryParams.get("checkOut") || ""
  );

  const collectData = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/", {
        method: "post",
        body: JSON.stringify({
          adults,
          kids,
          selectedValue,
          checkIn,
          checkOut,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log("Server response:", result);

      // You can handle the server response as needed
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    // You may want to update the state if the URL parameters change
    setAdults(queryParams.get("adults") || "");
    setKids(queryParams.get("kids") || "");
    setSelectedValue(queryParams.get("selectedValue") || "");
    setCheckInDate(queryParams.get("checkIn") || "");
    setCheckOutDate(queryParams.get("checkOut") || "");
  }, [location.search]);

  return (
    <Container>
      <Row style={{ marginTop: 20 }}>
        <Col lg={6} style={{ width: 400, margin: 10 }}>
          <p>Your Reservation</p>
          <Row>
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
              <p>Check-Out Date:</p>
            </Col>
            <Col>
              <p>{checkOut}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>Check-In Date:</p>
            </Col>
            <Col>
              <p>{checkIn}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>Selected Value:</p>
            </Col>
            <Col>{selectedValue}</Col>
          </Row>
        </Col>
        <Col lg={4} style={{ fontSize: 14, textAlign: "center", width: 400 }}>
          <p>Not Ready to Book Yet</p>
          <p>
            We have saved your search. Receive an email with a link back to your
            search
          </p>
          <Form className="text-center" onSubmit={collectData}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ borderRadius: "0" }}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" style={{ borderRadius: "0" }}>
              Subscribe
            </Button>
          </Form>
        </Col>
    
      </Row>
    </Container>
  );
}
