const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ success: true, message: "Order routes working" });
});

module.exports = router;
