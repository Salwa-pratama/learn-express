import express from "express";
import db from "../data/db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error mengambil data");
    }
    res.render("pages/home", {
      title: "home",
      data: results,
    });
  });
});

router.get("/landingPages", (req, res) => {
  res.render("pages/landingPages", {
    title: "landing pages",
  });
});

export default router;
