const Task = require("../models/Task");

async function getTasks(req, res) {
  try {
    const Tasks = await Task.find();
    res.status(200).send(Tasks);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
}

async function addTask(req, res) {
  try {
    const newTask = await Task.create({
      title: req.body.title,
    });
    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send("Error: Could not create task");
  }
}

async function toggleTask(req, res) {
  // TODO
}

async function deleteTask(req, res) {
  // TODO
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
