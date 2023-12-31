// Import the necessary modules
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../css/Calendar.css";

// Define the CalendarStep component
const CalendarStep = ({ title, selectedDate, onChange }) => (
  <div className="calendar-step">
    <h3 style={{ fontSize: "14px" }}>{title} Date</h3>
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={`Select ${title} Date`}
      inline
      className="custom-calendar"
    />
    <input
      type="text"
      value={selectedDate ? selectedDate.toDateString() : ""}
      readOnly
    />
    <div className="button-container">
      <Button
        style={{ backgroundColor: 'rgb(180, 141, 12)', borderRadius: 0, border: 0, color: 'white', fontSize: '14px' }}
        onClick={() => onChange(null)}
      >
        Clear
      </Button>
    </div>
  </div>
);

// Define the Calendar component
const Calendar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adults = queryParams.get("adults");
  const kids = queryParams.get("kids");

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <Container style={{ borderTop:'1px solid grey'}}>
      <Row style={{ fontSize: "14px" ,marginLeft:150,marginTop:50}}>
        <Col>
          <CalendarStep
            title="Check-In"
            selectedDate={checkInDate}
            onChange={(date) => setCheckInDate(date)}
          />
          <br />
          <Button
            style={{ backgroundColor: 'rgb(180, 141, 12)', borderRadius: 0, border: 0, color: 'white', fontSize: '14px' }}
            variant="outline-secondary"
            onClick={() => setCheckOutDate(null)}
          >
            Back
          </Button>
        </Col>
        <Col>
          <CalendarStep
            title="Check-Out"
            selectedDate={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
          />
          <br />
          <Button
            style={{ backgroundColor: 'rgb(180, 141, 12)', borderRadius: 0, border: 0, color: 'white', fontSize: '14px' }}
          >
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to={`/acc?adults=${adults}&kids=${kids}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
            >
              Next
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Export the Calendar component
export default Calendar;
