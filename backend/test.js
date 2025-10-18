import pool from "./config/db.js";
import bcrypt from "bcrypt";
import { User } from "./models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

async function testDatabaseConnection() {
  try {
    // Test database connection
    const client = await pool.connect();
    console.log("Successfully connected to database");

    // Create a test user
    const testUser = {
      username: "testuser",
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    };

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(testUser.password, salt);

    // Try to create the user
    try {
      const newUser = await User.createUser(
        testUser.username,
        testUser.name,
        testUser.email,
        hashedPassword
      );
      console.log("Test user created successfully:", newUser);
    } catch (error) {
      if (error.code === "23505") {
        // Unique violation error code
        console.log("Test user already exists");

        // Test login
        const user = await User.getUserByEmail(testUser.email);
        if (user) {
          console.log("Successfully retrieved test user from database");
        }
      } else {
        throw error;
      }
    }

    client.release();
  } catch (error) {
    console.error("Database test failed:", error);
  } finally {
    // Close the pool
    await pool.end();
  }
}

testDatabaseConnection();
