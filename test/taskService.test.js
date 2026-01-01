const assert = require('assert');
const { getTasks, addTask } = require('./../services/taskService');

try {
  const tasks = getTasks();
  assert.strictEqual(tasks.length, 2);

  const newTask = addTask('Test Task');
  assert.strictEqual(newTask.title, 'Test Task');
  assert.strictEqual(newTask.done, false);

  const updatedTasks = getTasks();
  assert.strictEqual(updatedTasks.length, 3);
  assert.strictEqual(updatedTasks[updatedTasks.length - 1].title, 'Test Task');
  console.log('✅ test passed');
} catch (e) {
  console.error('❌ test failed:', e.message);
  process.exit(1);
}