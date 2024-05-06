
# ToDoList Application

This is a simple ToDo list application built using MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Add new tasks to the ToDo list.
- Edit existing tasks.
- Delete tasks from the ToDo list.
- Mark tasks as completed.

## Technologies Used

- Frontend:
  - React.js
  - Axios
  - Material-UI Icons
  - react-toastify

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - mongoose
  - cors

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list.git

2. Change into the directory:

   cd todo-list

3. Install dependencies for both frontend and backend:

   ```bash
   cd Front_TODO
   npm install
   cd ../Back_TODO
   npm install

4. Start the frontend and backend servers:   

   ```bash
## Inside the client directory
   npm start

## Inside the server directory
npm start



# Backend API Endpoints
GET /tasks: Fetch all tasks.
POST /tasks/add: Add a new task.
GET /tasks/search/:id: Search for a task by ID.
DELETE /tasks/delete/:id: Delete a task by ID.
PUT /tasks/update/:id: Update a task by ID.




# Folder Structure

TODO/
├── Front_TODO/          # Frontend code
│   ├── public/
│   └── src/
└── Back_TODO/          # Backend code
    ├── Models/
    ├── Controller/
    └── Routes/# TODO_APP

