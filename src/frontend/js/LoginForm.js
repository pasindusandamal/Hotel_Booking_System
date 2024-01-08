import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import img4 from "../../assets/bed5.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("user"); // Default role is "user"
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password, userRole }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log("Server response:", result);

      if (result.message === "Login successful") {
        // Check the user role and navigate accordingly
        const { userRole } = result.userData;

        if (userRole === "user") {
          // If user, navigate to the user's welcome page
          navigate("/welcome");
        } else if (userRole === "admin") {
          // If admin, navigate to the admin's welcome page
          navigate("/admin");
        } else if (userRole === "staff") {
          // If staff, navigate to the staff's welcome page
          // Example: navigate("/staff/welcome");
        } else {
          // Handle unknown user roles or navigate to a default page
          console.error("Unknown user role:", userRole);
          // Example: navigate("/default/welcome");
        }
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const navigateToRegistration = () => {
    navigate("/registration");
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
          textAlign: "left",
        }}
      >
        <h1 style={{textAlign:'center'}}>Login Form</h1><br/>
        <Form onSubmit={login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: 0 }}
            />
          </Form.Group>

          <Form.Group controlId="formUserRole">
            <Form.Label>User Role</Form.Label>
            <Form.Control
              as="select"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              style={{ borderRadius: 0 }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </Form.Control>
          </Form.Group>

          <br />
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" style={{ borderRadius: "0", marginRight: 10 }}>
              Login
            </Button>
            <Button variant="primary" onClick={navigateToRegistration} style={{ borderRadius: "0" }}>
              Register
            </Button>
          </div>
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
