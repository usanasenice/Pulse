import { Hospital } from "../models/index.js";
import sequelize from "../config/database.js";

// A simple test to check database connectivity and create a test hospital
const testDatabase = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Create a simple hospital record
    const hospital = await Hospital.create({
      name: "Test Hospital",
      email: "test@hospital.com",
      phoneNumber: "123-456-7890",
      address: "123 Test St, Test City",
      location: sequelize.fn("ST_GeomFromText", "POINT(0 0)"),
      status: "active",
    });

    console.log("Test hospital created:", hospital.id);

    // Delete the test hospital
    await hospital.destroy();
    console.log("Test hospital deleted");

    console.log("Database tests completed successfully");
  } catch (error) {
    console.error(
      "Unable to connect to the database or complete tests:",
      error
    );
  } finally {
    await sequelize.close();
  }
};

// Run the test if this file is executed directly
testDatabase();
