import express from 'express';


const router = express.Router();

router.get("/tasks", (req, res) => {
    const tasks = taskController.getAllTasks(req, res);
    res.json(tasks);
});

router.post("/tasks", (req, res) => {
    const newTask = taskController.createTask(req, res);
    res.statusCode(201).json(newTask);
});

router.put("/tasks", (req, res) => {
    const updatedTask = taskController.updateTask(req, res);
    res.json(updatedTask);
});

router.delete("/tasks", (req, res) => {
    const message = taskController.deleteTask(req, res);
    res.json(message);
});

export default router;