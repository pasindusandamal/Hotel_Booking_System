// Import the necessary modules
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../css/Calendar.css";
import axios from "axios";


// Define the CalendarStep component
const CalendarStep = ({ title, selectedDate, onChange, excludeDates }) => (
  <div className="calendar-step">
    <h3 style={{ fontSize: "14px" }}>{title} Date</h3>
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={`Select ${title} Date`}
      inline
      className="custom-calendar"
      excludeDates={excludeDates}
      withPortal
      calendarClassName="custom-calendar-container"
      
    />
  {/*  <input
      type="text"
      value={selectedDate ? selectedDate.toDateString() : ""}
      readOnly
      style={{ width: "150px" }} 
    />*/}
    <div className="button-container">
      <Button
        style={{ backgroundColor: "rgb(180, 141, 12)", borderRadius: 0, border: 0, color: "white", fontSize: "14px" }}
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
  const [reservedDates, setReservedDates] = useState([]);

  const [users, setUsers] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getUsers')
      .then((response) => {
        setUsers(response.data);
        setReservedDates(response.data.map(user => ({
          checkInDate: user.checkIn,
          checkOutDate: user.checkOut
        })));
        setTableData(response.data.map(user => ({
          name: user.name,
          email: user.email,
          password: user.password,
          checkInDate: user.checkIn,
          checkOutDate: user.checkOut
        })));
      })
      .catch((err) => console.log(err));
  }, []);

  // Extract reserved dates to disable in the calendar
  const excludeDates = reservedDates.reduce((acc, reservation) => {
    if (reservation.checkInDate) acc.push(new Date(reservation.checkInDate));
    if (reservation.checkOutDate) acc.push(new Date(reservation.checkOutDate));
    return acc;
  }, []);

  return (
    <Container style={{ borderTop: '1px solid grey',marginTop:50 }}>
      <Row style={{ fontSize: "14px", marginLeft: 250, marginTop: 50 }}>
        <Col>
          <CalendarStep
            title="Check-In"
            selectedDate={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            excludeDates={excludeDates}
          />
          <br />
          <Button
            style={{ backgroundColor: "rgb(180, 141, 12)", borderRadius: 0, border: 0, color: "white", fontSize: "14px" }}
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
            excludeDates={excludeDates}
          />
          <br />
          <Button
            style={{ backgroundColor: "rgb(180, 141, 12)", borderRadius: 0, border: 0, color: "white", fontSize: "14px" }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/acc?adults=${adults}&kids=${kids}&checkIn=${checkInDate ? checkInDate.toISOString().split('T')[0] : ''}&checkOut=${checkOutDate ? checkOutDate.toISOString().split('T')[0] : ''}`}
            >
              Next
            </Link>
          </Button>
        </Col>
      </Row>

      {/* Commented out the tables and arrays for check-in and check-out */}
      {/*
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Check In</th>
              <th>checkOut</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.checkIn}</td>
                <td>{user.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h2>Table Data Array:</h2>
          <pre>{JSON.stringify(tableData, null, 2)}</pre>
        </div>
      </div>
      */}
    </Container>
  );
};

// Export the Calendar component
export default Calendar;
