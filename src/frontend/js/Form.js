import React, { useState, useEffect } from "react";
import { useLocation,Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import img4 from "../../assets/bed5.jpg";

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
        <h1>Your Reservation</h1>
        <p>Adults: {adults}</p>
        <p>Kids: {kids}</p>
        <hr />
        <p>Check-Out Date: {checkOut}</p>
        <hr />
        <p>Check-In Date: {checkIn}</p>
        <hr />
        <p>Selected Value: {selectedValue}</p>
        <hr />
        <p>Check In Date: {checkIn}</p>
        <hr />
        <p>Check Out Date: {checkOut}</p>
        <Form
          className="text-center"
          onSubmit={collectData}
          style={{ marginTop: 20 }}
        >
          <Button
            variant="primary"
            type="submit"
            style={{ borderRadius: "0" }}
          >
            Finish
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
