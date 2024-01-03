// LoginForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage() {
    // ... (existing code)
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const login = async (e) => {
      e.preventDefault();
  
      try {
        let result = await fetch("http://localhost:5000/login", {
          method: "post",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        result = await result.json();
        console.log("Login response:", result);
  
        // You can handle the login response as needed
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  
    return (
      <div>
        {/* ... (existing code) */}
        <Form className="text-center" onSubmit={login} style={{ marginTop: 20 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
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
  
          <Button variant="primary" type="submit" style={{ borderRadius: "0" }}>
            Login
          </Button>
        </Form>
      </div>
    );
  }