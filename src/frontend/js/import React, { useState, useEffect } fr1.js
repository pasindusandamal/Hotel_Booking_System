import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Form() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [adults, setAdults] = useState(queryParams.get("adults") || "");
  const [kids, setKids] = useState(queryParams.get("kids") || "");
  const [selectedValue, setSelectedValue] = useState(
    queryParams.get("selectedValue") || ""
  );
  const [checkInDate, setCheckInDate] = useState(
    queryParams.get("checkInDate") || ""
  );
  const [checkOutDate, setCheckOutDate] = useState(
    queryParams.get("checkOutDate") || ""
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
          checkInDate,
          checkOutDate,
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
    <div className="container">
      <form onSubmit={collectData}>
        {/* Your form fields here */}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <p>Value: {selectedValue}</p>
        <p>Check Out Date: {checkOutDate}</p>
        <p>Check In Date: {checkInDate}</p>
      </form>

      
    </div>
  );
}
