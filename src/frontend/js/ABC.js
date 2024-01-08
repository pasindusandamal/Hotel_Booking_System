import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcStripe } from "@fortawesome/free-brands-svg-icons";
import Stripe from "../js/Stripe";
import { Link } from "react-router-dom";

const ABC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Use queryParams to get the values
  const adults = queryParams.get("adults");
  const kids = queryParams.get("kids");
  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const selectedValue = parseFloat(queryParams.get("selectedValue")) || 0;

  // State variables for tax and total
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect to recalculate tax and total whenever selectedValue changes
  useEffect(() => {
    // Assuming tax is 7%
    const calculatedTax = selectedValue * 0.07;
    setTax(calculatedTax);

    // Total is the sum of selectedValue and tax
    const calculatedTotal = selectedValue + calculatedTax;
    setTotal(calculatedTotal);
  }, [selectedValue]);



  
  return (
    <Container style={{ borderTop: "1px solid #ddd",marginTop:50 }}>
      <Row style={{ marginTop: 50 }}>
        <p style={{ textAlign: "center" }}>
          Summery
          <br />
          <br />
        </p>
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
                Price(USD):
              </p>
            </Col>
            <Col> {selectedValue.toFixed(2)}</Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p style={{ fontSize: 14 }}>Tax</p>
            </Col>
            <Col>{tax.toFixed(2)}</Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p style={{ fontSize: 14 }}>Total</p>
            </Col>
            <Col>{total.toFixed(2)}</Col>
          </Row>
          <hr />
          <p style={{ fontSize: 14 }}>Special Requests</p>
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
          <div style={{ width: 250, height: 50, borderRadius: "0" }}>
            {" "}
            <Link  to={`/frm?selectedValue=${selectedValue}&adults=${adults}&kids=${kids}&checkIn=${checkIn}&checkOut=${checkOut}`}>
            <Stripe />
          </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ABC;
