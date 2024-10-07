const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
