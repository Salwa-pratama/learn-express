import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home", {
    title: "home",
  });
});

router.get("/landingPages", (req, res) => {
  res.render("pages/landingPages", {
    title: "landing pages",
  });
});

export default router;
