const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N2gdpGDWV8jlCoqVeo2duqfAOuDawru4ZShGxfAAlOamwIZJXeB0PYtBkXeYM92Rw7ttK3UZi0GVWTbYe8uXg6P008WtDLqMf"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received!! for this amount>>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/chalenge-d57e1/us-central1/api
