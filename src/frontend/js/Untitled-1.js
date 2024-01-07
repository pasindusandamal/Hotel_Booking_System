import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import img4 from "../../assets/bed5.jpg";

export default function ManualFormPage() {
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [checkIn, setCheckInDate] = useState("");
  const [checkOut, setCheckOutDate] = useState("");

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

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Manual Reservation Form</h1>
        <Form onSubmit={collectData}>
          <Form.Group controlId="formAdults">
            <Form.Label>Adults</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number of adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formKids">
            <Form.Label>Kids</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number of kids"
              value={kids}
              onChange={(e) => setKids(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formSelectedValue">
            <Form.Label>Selected Value</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter selected value"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCheckIn">
            <Form.Label>Check-In Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter check-in date"
              value={checkIn}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCheckOut">
            <Form.Label>Check-Out Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter check-out date"
              value={checkOut}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ borderRadius: "0" }}>
            Submit
          </Button>
        </Form>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img4})`,
          backgroundSize: "cover",
          filter: "blur(5px)", // Apply blur to the background image
        }}
      ></div>
    </div>
  );
}
