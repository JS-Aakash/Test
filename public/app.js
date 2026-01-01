async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task.title}</span>
      <span class="status ${task.done ? "done" : "pending"}">
        ${task.done ? "Done" : "Pending"}
      </span>
    `;

    list.appendChild(li);
  });
}

async function loadStats() {
  const res = await fetch("/api/stats");
  const { total, completed } = await res.json();

  document.getElementById("total").textContent = total;
  document.getElementById("completed").textContent = completed;
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value;

  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  input.value = "";
  loadTasks();
  loadStats();
}

loadTasks();
loadStats();
