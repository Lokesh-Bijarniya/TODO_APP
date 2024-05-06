import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskDescription, setEditTaskDescription] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    fetchToDoList();
  }, [editTaskId]);

  const fetchToDoList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      setToDoList(response.data.message);
    } catch (error) {
      console.error("Error fetching todo list:", error);
      toast.error("Failed to fetch todo list");
    }
  };

  const addTask = async () => {
    try {
      const response = await axios.post("http://localhost:8000/tasks/add", {
        description: newTaskDescription,
      });
      const newTask = response.data.message;
      setToDoList([...toDoList, newTask]);
      toast.success("Task added successfully");
      setNewTaskDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/delete/${_id}`);

      toast.success("Task deleted successfully");
      setToDoList(toDoList.filter((task) => task._id !== _id));
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  const updateTask = async (_id) => {
    try {
      console.log(_id);
      await axios.put(`http://localhost:8000/tasks/update/${_id}`, { description: editTaskDescription }, { headers: { 'Content-Type': 'application/json' }});
      console.log(editTaskDescription);

      toast.success("Task updated successfully");
      setEditTaskId(null);
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  };

  return (
    <div className="body">
      <div className="title">MY TO-DO LIST</div>
      <div className="list">
        {toDoList.map((task) => (
          <div className="task" key={task._id}>
            {editTaskId === task._id ? (
              <input
                value={editTaskDescription}
                onChange={(e) => setEditTaskDescription(e.target.value)}
              />
            ) : (
              <div className="taskContent">{task.description}</div>
            )}
            <div className="taskActions">
              {editTaskId === task._id ? (
                <div className="action" onClick={() => updateTask(task._id)}>
                  <DoneIcon />
                </div>
              ) : (
                <>
                  <div
                    className="action"
                    onClick={() => setEditTaskId(task._id)}
                  >
                    <BorderColorIcon />
                  </div>
                  <div className="action" onClick={() => deleteTask(task._id)}>
                    <DeleteIcon />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="addBtn">
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Enter new task description..."
        />
        <div className="btnText" onClick={addTask}>
          Add new task
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToDoList;
