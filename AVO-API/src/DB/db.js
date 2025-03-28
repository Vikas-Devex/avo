const mysql = require("mysql2");
require("dotenv").config();
// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});
const localHost = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Avo_Dev",
});

console.log();

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL!");
});

module.exports = db;
