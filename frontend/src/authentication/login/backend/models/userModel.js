const client = require('../dbconnection/db'); // Import the PostgreSQL client

// Function to create a new user (signup)
const createUser = async (username, name, email, password) => {
    try {
      const query = 'INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await client.query(query, [username, name, email, password]);
  
      return result.rows[0]; // Return the newly created user
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Propagate the error
    }
  };
  
// Function to get a user by email (for login)
const getUserByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    return result.rows[0]; // Return the user if found
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error; // Propagate the error
  }
};

// Export functions for use in controllers
module.exports = {
  createUser,
  getUserByEmail,
};
