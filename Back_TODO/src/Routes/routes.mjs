import express from "express";
import {
  createTask,
  deleteTask,
  searchTask,
  updateTask,
} from "../Controller/todoController.mjs";

const router = express.Router();

router.get("/tasks", searchTask);
router.post("/tasks/add", createTask);
router.get("/tasks/search/:id", searchTask);
router.delete("/tasks/delete/:id", deleteTask);
router.put("/tasks/update/:id", updateTask);

export { router };
