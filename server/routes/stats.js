const express = require("express");
const router = express.Router();
const taskService = require("../services/taskService");

router.get("/", (req, res) => {
  const tasks = taskService.getTasks();

  const completed = tasks.filter(t => t.done === true).length;
  const total = tasks.length;

  res.json({ total, completed });
});

module.exports = router;
