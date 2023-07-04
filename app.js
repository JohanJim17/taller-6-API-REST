const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let tasks = [];

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Obtener una tarea por su ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  } else {
    res.json(task);
  }
});

// Crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: Date.now().toString(), title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  } else {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed || task.completed;
    res.json(task);
  }
});

// Eliminar una tarea
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex(task => task.id === taskId);
  if (index === -1) {
    res.status(404).json({ mensaje: 'Tarea no encontrada' });
  } else {
    const deletedTask = tasks.splice(index, 1)[0];
    res.json(deletedTask);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
