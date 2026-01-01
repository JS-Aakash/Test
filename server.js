const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Simple API endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "DeployOps full-stack demo running successfully 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
