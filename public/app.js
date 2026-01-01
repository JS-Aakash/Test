async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  const ul = document.getElementById("tasks");
  ul.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.title;
    ul.appendChild(li);
  });
}

async function loadStats() {
  const res = await fetch("/api/stats");
  const stats = await res.json();
  document.getElementById("stats").textContent =
    JSON.stringify(stats, null, 2);
}

async function addTask() {
  const title = document.getElementById("taskInput").value;

  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  loadTasks();
  loadStats();
}

loadTasks();
loadStats();
