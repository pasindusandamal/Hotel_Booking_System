// LoginForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

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
          // Example: navigate("/admin/welcome");
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

  return (
    <div>
      <Form className="text-center" onSubmit={login} style={{ marginTop: 20 }}>
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
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ borderRadius: "0" }}>
          Login
        </Button>
      </Form>
    </div>
  );
}
