const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/tasks.json");

function getTasks() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

function addTask(title) {
  const tasks = getTasks();

  const newTask = {
    id: Date.now(),
    title,
    done: false
  };

  tasks.push(newTask);

  fs.writeFile(dataPath, JSON.stringify(tasks, null, 2), () => {});

  return newTask;
}

module.exports = { getTasks, addTask };
