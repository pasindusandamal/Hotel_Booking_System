const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const Stripe = require('stripe')(process.env.SECRET_KEY);
var cors = require('cors');

// MongoDB setup
require('./db/connection');
const User = require('./Models/User');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, error => {
  if (error) throw error;
  console.log('Your server is running on port 5000');
});

// MongoDB endpoint
app.post('/', async (req, res) => {
  let user = new User(req.body);
  let result;
  try {
    result = await user.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Stripe endpoint
app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});
