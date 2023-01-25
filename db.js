const pool = require("pg").pool1;

const pool = new pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password"",
  port: 5342,
})