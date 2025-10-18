const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./login/backend/routes/authRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Health check endpoint (required by Render)
app.get("/health", (req, res) => res.send("OK"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for testing if needed
