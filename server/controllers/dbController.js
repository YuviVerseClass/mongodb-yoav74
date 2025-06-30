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
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send("Task Not Found");
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { done: !task.done } },
      { new: true }
    );
    res.status(200).send(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error, could not update task");
  }
}

async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send("Task Not Found");
    }
    res.status(200).send("Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Deleting Task");
  }
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
