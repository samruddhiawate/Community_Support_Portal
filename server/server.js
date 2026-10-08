const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const organizationRoutes = require("./routes/organizationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Organization API
app.use("/api/organizations", organizationRoutes);

// Simple test route
app.get("/test", (req, res) => {
  res.send("TEST ROUTE WORKS");
});

// Home route
app.get("/", (req, res) => {
  res.send("Community Support Portal Backend is running!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});