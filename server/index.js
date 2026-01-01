const express = require('express');
const path = require('path');

const taskRoutes = require('./routes/tasks');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/tasks', taskRoutes);
app.use('/api/stats', statsRoutes);

app.use((err, req, res) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`TaskFlow Pro running at http://localhost:${PORT}`);
});