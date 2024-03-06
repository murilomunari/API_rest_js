const Task = require("../models/task");


class TaskController {
  async createTask(req, res) {
    try {
      const taskData = req.body;
      const task = await Task.create(taskData);
      return res.json({ message: "Task added successfully", task });
    } catch (error) {
      return res.status(500).json({ message: "Error adding task", error });
    }
  }

  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching tasks", error });
    }
  }

  async updateTask(req, res) {
    try {
      const taskId = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
      return res.status(500).json({ message: "Error updating task", error });
    }
  }

  async deleteTask(req, res) {
    try {
      const taskId = req.params.id;
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.json({ message: "Task deleted successfully", task: deletedTask });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting task", error });
    }
  }
}

export default TaskController;

