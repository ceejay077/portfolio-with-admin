const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authController = require("./controllers/authController");
const routes = require("./routes");
const errorHandler = require("./middlewares/error");

const app = express();

// Connect to database
connectDB();

// Initialize admin user (run once)
authController.initAdmin();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Error handler
app.use(errorHandler);

module.exports = app;
