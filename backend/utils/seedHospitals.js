import { Hospital } from "../models/index.js";
import sequelize from "../config/database.js";

const seedHospitals = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Create test hospitals
    const hospitals = await Hospital.bulkCreate([
      {
        name: "City General Hospital",
        address: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        latitude: 40.73061,
        longitude: -73.935242,
        phone: "212-555-0123",
        email: "contact@citygeneral.com",
        website: "www.citygeneral.com",
        status: "active",
      },
      {
        name: "Memorial Medical Center",
        address: "456 Park Avenue",
        city: "New York",
        state: "NY",
        zipCode: "10022",
        latitude: 40.757937,
        longitude: -73.97652,
        phone: "212-555-0124",
        email: "contact@memorialmed.com",
        website: "www.memorialmed.com",
        status: "active",
      },
      {
        name: "Riverside Hospital",
        address: "789 West End Avenue",
        city: "New York",
        state: "NY",
        zipCode: "10025",
        latitude: 40.757937,
        longitude: -73.97652,
        phone: "212-555-0125",
        email: "contact@riverside.com",
        website: "www.riverside.com",
        status: "active",
      },
    ]);

    console.log("Test hospitals created:", hospitals.length);
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
};

// Run the seeder
seedHospitals();
