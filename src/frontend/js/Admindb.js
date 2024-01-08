// Import the necessary modules
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../css/Admindb.css";
import axios from "axios";

// Define the CalendarStep component

const Admindb = () => {
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
      .get("http://localhost:5000/getUsers")
      .then((response) => {
        setUsers(response.data);
        setReservedDates(
          response.data.map((user) => ({
            checkInDate: user.checkIn,
            checkOutDate: user.checkOut,
          }))
        );
        setTableData(
          response.data.map((user) => ({
            name: user.name,
            email: user.email,
            password: user.password,
            checkInDate: user.checkIn,
            checkOutDate: user.checkOut,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  // Extract reserved dates to disable in the calendar
  const excludeDates = reservedDates.reduce((acc, reservation) => {
    if (reservation.checkInDate) acc.push(new Date(reservation.checkInDate));
    if (reservation.checkOutDate) acc.push(new Date(reservation.checkOutDate));
    return acc;
  }, []);

  // Add a function to calculate the status
  const calculateStatus = (currentDate, checkInDate, checkOutDate) => {
    const currentDateTime = currentDate.getTime();
    const checkInDateTime = checkInDate.getTime();
    const checkOutDateTime = checkOutDate.getTime();

    if (currentDateTime > checkOutDateTime) {
      return "Completed";
    } else if (currentDateTime < checkInDateTime) {
      return "Pending";
    } else {
      return "Ongoing";
    }
  };

  return (
    <Container style={{ borderTop: "1px solid grey" }}>
      <Row style={{ fontSize: "14px", marginLeft: 150, marginTop: 50 }}></Row>

      {/* Commented out the tables and arrays for check-in and check-out */}
      <div>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Check In</th>
              <th>checkOut</th>
              <th>Status</th>
              <th>Action</th>
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
                <td>
                  {calculateStatus(
                    new Date(),
                    new Date(user.checkIn),
                    new Date(user.checkOut)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Hidden: Table Data Array */}
        {/* <div>
        <h2>Table Data Array:</h2>
        <pre>{JSON.stringify(tableData, null, 2)}</pre>
      </div> */}
      </div>
    </Container>
  );
};

export default Admindb;
