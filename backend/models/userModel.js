import pool from "../config/db.js";

export class User {
  static async getUserByEmail(email) {
    try {
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      return result.rows[0];
    } catch (error) {
      console.error("Error in getUserByEmail:", error);
      throw error;
    }
  }

  static async createUser(username, name, email, password) {
    try {
      const result = await pool.query(
        "INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
        [username, name, email, password]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error in createUser:", error);
      throw error;
    }
  }
}
