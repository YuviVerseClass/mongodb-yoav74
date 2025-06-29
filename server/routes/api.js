// Require express and create a router

// Require your controller
// const db = ...

// Wire each of the following routes to its controller method:
// GET    /tasks         => db.getTasks
// POST   /tasks         => db.addTask
// PATCH  /tasks/:id     => db.toggleTask
// DELETE /tasks/:id     => db.deleteTask

// Export the router
const express = require('express');
const router = express.Router();
const db = require("../controllers/dbController");

router.get("/tasks", db.getTasks);
router.post("/tasks", db.addTask);
router.patch("/tasks/:id", db.toggleTask);
router.delete("/tasks/:id", db.deleteTask);


module.exports = router;