const assert = require('assert');
const { getTasks, addTask } = require('./../services/taskService');

try {
  const tasks = getTasks();
  assert.ok(tasks.length === 2);

  const newTask = addTask('Test Task');
  assert.ok(newTask.title === 'Test Task');
  assert.ok(newTask.done === false);

  console.log('✅ test passed');
} catch (e) {
  console.error('❌ test failed:', e.message);
  process.exit(1);
}