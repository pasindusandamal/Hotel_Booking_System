import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Admin = () => {
  const cardStyle = {
    borderRadius: "0", // Set border radius to 0
    height: "250px", // Set the height of the card
    marginLeft:50
  };

  const buttonStyle = {
    borderRadius: "0", // Set border radius to 0 for buttons
    display: "block", // Make the button a block element
    margin: "auto", // Center align the button
    color: "white", // Set button text color to white
  };

  const linkStyle = {
    textDecoration: "none", // Remove text decoration for links
    color:'white'
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <br /> <br /> <br />
          <Card style={{ ...cardStyle }} className="shadow-sm mb-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Check Users</Card.Title>
              <Card.Text>
                View and manage users.........................
              </Card.Text>
              <Button variant="primary" style={{ ...buttonStyle }}>
                <Link to="/users" style={linkStyle}>Click Here</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <br /> <br /> <br />
          <Card style={{ ...cardStyle }} className="shadow-sm mb-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Check Reservations</Card.Title>
              <Card.Text>Access and review reservation...........</Card.Text>
              <Button variant="primary" style={{ ...buttonStyle }}>
                <Link to="/reservation" style={linkStyle}>Click Here</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <br /> <br /> <br />
          <Card style={{ ...cardStyle }} className="shadow-sm mb-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Log Out</Card.Title>
              <Card.Text>Log out user of the system....</Card.Text>.<br />
              <Button variant="primary" style={{ ...buttonStyle }}>
                <Link to="/" style={linkStyle}>Click Here</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
