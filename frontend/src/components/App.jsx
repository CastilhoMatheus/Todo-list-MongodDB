import { useEffect, useState } from "react";
import "../assets/App.css";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import {
  getTasks,
  addTask,
  deleteTask,
  getCurrentTask,
} from "../utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleAddTodo(todo) {
    addTask(todo.title, todo.note, todo.priority, setTodo);
  }

  const handleDelete = (id) => {
    deleteTask(id, setTodo);
  };

  const handleGetUpdate = (id) => {
    getCurrentTask(id, setCurrentTask);

    for (let items of todo) {
      console.log(items._id);
    }

    setIsEditing(!isEditing);
  };

  const handleEditTodo = (todo) => {
    console.log(todo);
  };

  useEffect(() => {
    console.log(currentTask);
    getTasks(setTodo);
  }, []);

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <TodoInput
          onAddTodo={handleAddTodo}
          onEditTodo={handleEditTodo}
          isEditing={isEditing}
          currentTodo={currentTask}
        />
        <TodoItem
          tasks={todo}
          deleteTodo={handleDelete}
          updateTodo={handleGetUpdate}
        />
      </div>
    </>
  );
}

export default App;
