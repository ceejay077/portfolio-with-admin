const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authController = require("../controllers/authController");

// Public route
router.post("/", contactController.createContactMessage);

// Protected route
router.get(
  "/",
  authController.verifyToken,
  contactController.getContactMessages
);

module.exports = router;
