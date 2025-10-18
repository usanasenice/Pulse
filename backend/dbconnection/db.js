const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "pulse_login",
  password: "0000",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL Successfully! 🥰"))
  .catch((err) => console.error("Connection error 💔", err.stack));

module.exports = client;
