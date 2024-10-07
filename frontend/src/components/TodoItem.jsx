import { Button } from "bootstrap";
import "../assets/App.css";
import Table from "react-bootstrap/Table";

function TodoItem({ tasks, deleteTodo, updateTodo }) {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id) => {
    updateTodo(id);
  };

  return (
    <Table className="mb-4" hover size="lg">
      <thead>
        <tr>
          <th>No.</th>
          <th>Todo item</th>
          <th>Note</th>
          <th>priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="text-nowrap">{task.title}</td>
            <td className="text-wrap">{task.note}</td>
            <td>{task.priority}</td>
            <td style={{ width: "15%" }}>
              <button
                className="btn btn-primary me-1"
                onClick={() => handleEdit(task._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ms-1"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TodoItem;
