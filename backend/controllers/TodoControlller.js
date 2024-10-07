const TodoModel = require("../models/TodoModel");

module.exports.getTodos = async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
};

module.exports.saveTodo = async (req, res) => {
  const { title, note, priority } = req.body;

  TodoModel.create({ title, note, priority }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, title, note, priority } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
