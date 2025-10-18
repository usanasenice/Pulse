// loginController.js

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Assuming you want to use JWT for authentication

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.getUserByEmail(email); // Adjust if your method is different
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token (Optional if using JWT)
    const token = jwt.sign(
      { id: user.id, username: user.username },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    // Respond with user details (exclude password) and the token
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error in login:", error);
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later" });
  }
};

module.exports = { login };
