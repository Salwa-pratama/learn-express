import express from "express";
import db from "../data/db.js";

const router = express.Router();

router.post("/testing", (req, res) => {
  res.send("Router POST is READY🚀");
});

router.post("/register", (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const sql =
    "INSERT INTO user(first_name, last_name, email, password) values (?, ? , ? ,?)";

  db.query(sql, [first_name, last_name, email, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("data ", result.insertId);

    res.redirect("/");
  });
});

export default router;
