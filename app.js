const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory store
const tasks = [];
let nextId = 1;

// List tasks
app.get("/api/tasks", (req, res) => {
  const { status } = req.query;
  const result = status
    ? tasks.filter((t) => t.status === status)
    : tasks;
  res.json(result);
});

// Create task — now requires priority, uses assigned_to instead of assignee
app.post("/api/tasks", (req, res) => {
  const { title, description, assigned_to, priority } = req.body;
  if (!title) {
    return res.status(422).json({ detail: "title is required" });
  }
  if (!priority) {
    return res.status(422).json({ detail: "priority is required" });
  }
  const task = {
    id: nextId++,
    title,
    description: description || null,
    status: "pending",
    created_at: new Date().toISOString(),
    assigned_to: assigned_to || null,
    priority,
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Get task by ID
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ detail: "Task not found" });
  }
  res.json(task);
});

// DELETE endpoint removed

// Health check — uptime changed from number to string
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: `${Math.floor(process.uptime())} seconds`,
  });
});

app.listen(PORT, () => {
  console.log(`TaskForge API running on http://localhost:${PORT}`);
});
