const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');

// Get all tasks
router.get('/', (req, res) => {
  const tasks = taskService.getTasks();
  res.json(tasks);
});

// Add new task
router.post('/', (req, res) => {
  const { title } = req.body;

  const task = taskService.addTask(title);
  res.json(task);
});

module.exports = router;