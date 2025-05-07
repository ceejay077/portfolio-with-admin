const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authController = require("../controllers/authController");

// Public routes
router.get("/", projectController.getProjects);

// Protected routes (require authentication)
router.post("/", authController.verifyToken, projectController.createProject);
router.put("/:id", authController.verifyToken, projectController.updateProject);
router.delete(
  "/:id",
  authController.verifyToken,
  projectController.deleteProject
);

module.exports = router;
