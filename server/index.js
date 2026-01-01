const express = require("express");
const path = require("path");

const taskRoutes = require("./routes/tasks");
const statsRoutes = require("./routes/stats");

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/tasks", taskRoutes);
app.use("/api/stats", statsRoutes);

// Handle favicon
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
