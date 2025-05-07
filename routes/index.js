const express = require("express");
const router = express.Router();
const projectRoutes = require("./projectRoutes");
const contactRoutes = require("./contactRoutes");
const authRoutes = require("./authRoutes");

router.use("/projects", projectRoutes);
router.use("/contact", contactRoutes);
router.use("/auth", authRoutes);

module.exports = router;
