const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.createUser(
      username,
      name,
      email,
      hashedPassword
    );

    // Respond with the newly created user
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error in signup:", error);
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later" });
  }
};

module.exports = { signup };
