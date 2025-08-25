import express from "express";

const router = express.Router();

router.post("/testing", (req, res) => {
  res.send("Router POST is READY🚀");
});

export default router;
