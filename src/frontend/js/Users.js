// Import the necessary modules
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../css/Admindb.css";
import axios from "axios";

// Define the CalendarStep component

const Users = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [reservedDates, setReservedDates] = useState([]);

  const [users, setUsers] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getLogins")
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
            username: user.username,
            email: user.email,
            userRole: user.userRole,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  // Extract reserved dates to disable in the calendar

  const deleteUser = async (userId) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/deleteUsers/${userId}`
      );
      console.log("Server response:", result.data);

      if (result.data.message === "User deleted successfully") {
        // If deletion is successful, update the users state to reflect the changes
        setUsers(users.filter((user) => user._id !== userId));
        console.log("User deleted successfully");
      } else {
        // Handle deletion error
        console.error("User deletion failed");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [updatingUser, setUpdatingUser] = useState(null);

  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    email: "",
    password: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const openUpdateForm = (user) => {
    setIsUpdateFormOpen(true);
    setUpdatingUser(user);
    setUpdatedDetails({
      name: user.name,
      email: user.email,
      password: user.password,
      checkInDate: user.checkIn,
      checkOutDate: user.checkOut,
    });
  };

  const closeUpdateForm = () => {
    setIsUpdateFormOpen(false);
    setUpdatingUser(null);
    setUpdatedDetails({
      name: "",
      email: "",
      password: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  const handleUpdate = async () => {
    console.log("Updating user ID:", updatingUser._id);

    try {
      // ... rest of the code
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container style={{ borderTop: "1px solid grey", marginTop: 50 }}>
   <Row className="text-center" style={{ fontSize: "16px", marginTop: 10 ,marginBottom:10}}>
        <Col>
          <p>User Account Details</p>
        </Col>
      </Row>
      {/* Commented out the tables and arrays for check-in and check-out */}
      <div>
        <table
          className="modern-table"
          style={{ marginTop: 50, marginLeft: -100 }}
        >
          <thead>
            <tr>
              <th>User Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>

              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>

                <td>
                  {/* Add a delete button for each user */}
                  <Button variant="danger" onClick={() => deleteUser(user._id)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Button variant="info" onClick={() => openUpdateForm(user)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />

        {isUpdateFormOpen && (
          <div>
            <h2>Update User</h2>
            {/* Render a form with input fields for updatedDetails */}
            <div>
              <label>User Id:</label>
              <input
                type="text"
                value={updatedDetails.name || ""}
                onChange={(e) =>
                  setUpdatedDetails({ ...updatedDetails, name: e.target.value })
                }
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={updatedDetails.email || ""}
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                value={updatedDetails.password || ""}
                onChange={(e) =>
                  setUpdatedDetails({
                    ...updatedDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            {/* Add input change handlers for other fields as needed */}
            <br />
            {/* Add a submit button to call handleUpdate */}
            <Button
              variant="secondary"
              onClick={closeUpdateForm}
              style={{ marginRight: "5px" }}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </div>
        )}
      </div>

      {/* Hidden: Table Data Array */}
      {/* <div>
        <h2>Table Data Array:</h2>
        <pre>{JSON.stringify(tableData, null, 2)}</pre>
      </div> */}
    </Container>
  );
};

export default Users;
