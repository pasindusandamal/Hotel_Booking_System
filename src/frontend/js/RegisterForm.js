import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import img4 from "../../assets/bed5.jpg";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("user"); // Default role is "user"
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("https://hotel-booking-backend-5f327caf5929.herokuapp.com/:5000/registerUser", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          userRole,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log("Server response:", result);

      if (result.message === "User registration successful") {
        // If registration is successful, navigate to the welcome page
        navigate("/welcome");
      } else {
        // Handle registration error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error sending registration data:", error);
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
        <h1>User Registration Form</h1>
        <Form onSubmit={registerUser}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formUserRole">
            <Form.Label>User Role</Form.Label>
            <Form.Control
              as="select"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          <br />
          <Button variant="primary" type="submit" style={{ borderRadius: "0" }}>
            Register
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
