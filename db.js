const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password:"自分で作ったパスワードを入力する",
  port: 5432,
});
module.exports = pool;