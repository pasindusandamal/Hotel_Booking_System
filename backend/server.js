const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const Stripe = require("stripe")(process.env.SECRET_KEY);
var cors = require("cors");

// MongoDB setup
//require("./db/connection");
const User = require("./Models/User");
const Login = require("./Models/Login");

const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = 5000;

const uri = "mongodb+srv://user1:user1@cluster0.wi9xsci.mongodb.net/";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`${port}`);
});

app.get("/getUsers", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getLogins", (req, res) => {
  Login.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result;
  try {
    result = await user.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Save data endpoint for user registration
app.post("/registerUser", async (req, res) => {
  const { username, email, password, confirmPassword, userRole } = req.body;

  try {
    // Validate required fields
    if (!username || !email || !password || !confirmPassword || !userRole) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the username or email already exists
    const existingUser = await Login.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // Create a new instance of the login model
    let newUser = new Login({
      username,
      email,
      password,
      confirmPassword,
      userRole, // Include the userRole in the model instance
    });

    // Save the user registration data to the database
    const result = await newUser.save();

    res.json({ message: "User registration successful", userData: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete user endpoint
app.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("Deleting user with ID:", userId);
  try {
    // Check if the user exists
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user from the database
    await existingUser.deleteOne(); // Use deleteOne or deleteMany

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});



// Delete user endpoint
app.delete("/deleteUsers/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("Deleting user with ID:", userId);
  try {
    // Check if the user exists
    const existingUser = await Login.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user from the database
    await existingUser.deleteOne(); // Use deleteOne or deleteMany

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
// Update user endpoint
app.put("/updateUser/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedDetails = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's details in the database
    existingUser.set(updatedDetails);
    await existingUser.save();

    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Login user endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Login.findOne({ email });

    if (user && password === user.password) {
      // Login successful
      res.json({
        message: "Login successful",
        userData: {
          username: user.username,
          email: user.email,
          userRole: user.userRole,
        },
      });
    } else {
      // Invalid credentials or user not found
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Stripe endpoint
app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "Failure";
  }
  res.json({ error, status });
});
