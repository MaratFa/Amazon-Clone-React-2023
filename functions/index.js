const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N2gdpGDWV8jlCoqVeo2duqfAOuDawru4ZShGxfAAlOamwIZJXeB0PYtBkXeYM92Rw7ttK3UZi0GVWTbYe8uXg6P008WtDLqMf"
);
