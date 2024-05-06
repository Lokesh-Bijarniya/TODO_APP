import todoSchema from "../Models/todoModel.mjs";

const createTask = async (req, res) => {
  try {
    const data = req.body;
    const createdTask = await todoSchema.create(data);
    return res.status(200).send({ status: true, message: createdTask });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await todoSchema.findByIdAndDelete({ _id: id });
    return res.status(200).send({ status: true, message: deletedTask });
  } catch (err) {
    return res.status(400).send({ status: false, message: err.message });
  }
};

const searchTask = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const searchedTask = await todoSchema.findOne({ _id: id });
      return res.status(200).send({ status: true, message: searchedTask });
    } else {
      const searchedTask = await todoSchema.find();
      return res.status(200).send({ status: true, message: searchedTask });
    }
  } catch (err) {
    return res.status(400).send({ status: false, message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const data = req.params.id;
    console.log(data);
    const {description}  = req.body;
    console.log(description);

    const updatedTask = await todoSchema.findByIdAndUpdate(
      data,
      { description: description, updatedAt:Date.now() },

      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ status: false, message: "Task not found" });
    }

    return res.status(200).send({ status: true, message: updatedTask });
  } catch (err) {
    return res.status(400).send({ status: false, message: err.message });
  }
};

export { createTask, deleteTask, searchTask, updateTask };
