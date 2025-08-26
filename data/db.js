import mysql from "mysql2";

// Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_user",
});

db.connect((err) => {
  if (err) {
    console.log("Canot connect database");
  } else {
    console.log("Mysql is connected");
  }
});

export default db;
