import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Booking = () => {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value, 10));
  };

  const handleKidsChange = (e) => {
    setKids(parseInt(e.target.value, 10));
  };

  return (
    <Container
      className="booking-container  mx-auto"
      style={{ borderTop: "1px solid black" }}
    >
      <Form style={{marginLeft:350}}>
        <br />
        <h2>Booking Details</h2> <br />
        <Row>
          <Col md={6}>
            <Form.Group controlId="adults">
              <Form.Label>Adults:</Form.Label>
              <Form.Control 
                as="select"
                onChange={handleAdultsChange}
                value={adults}
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="kids">
              <Form.Label>Kids:</Form.Label>
              <Form.Control
                as="select"
                onChange={handleKidsChange}
                value={kids}
              >
                {[...Array(5)].map((_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Button className="book-button" style={{ borderRadius: 0 ,backgroundColor:'rgb(180, 141, 12)' ,border:0}}>
          <Link
            to={`/calendar?adults=${adults}&kids=${kids}`}
            className="text-white"
            style={{ textDecoration:'none'}}
          >
            Proceed to Next Step
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default Booking;
