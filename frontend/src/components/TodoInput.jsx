import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function TodoInput({ onAddTodo, isEditing, currentTodo, onEditTodo }) {
  // form
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [note, setNotes] = useState("");

  // Populate the form with currentTodo when editing
  useEffect(() => {
    if (isEditing && currentTodo) {
      setTitle(currentTodo.title);
      setPriority(currentTodo.priority);
      setNotes(currentTodo.note);
    } else {
      // Clear the form when adding a new task
      setTitle("");
      setPriority("Low");
      setNotes("");
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new todo object
    const newTodo = {
      title,
      note,
      priority,
    };

    if (isEditing) {
      // If editing, call the edit handler
      onEditTodo(currentTodo); // Assuming the task has an id
    } else {
      // Call the handler passed from the App component to add a new task
      onAddTodo(newTodo);
    }

    // Reset form fields
    setTitle("");
    setNotes("");
    setPriority("Low");
    handleClose();
  };

  //bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {isEditing ? "Edit Task" : "New Task"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Edit Task" : "Add New Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTaskName">
                <Form.Control
                  type="text"
                  placeholder="Enter a new task"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTaskPriority">
                <Form.Select
                  defaultValue={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridNotess">
              <Form.Control
                as="textarea"
                placeholder="Notes (Opitional)"
                value={note}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3 mx-1">
              <Button
                type=""
                variant="warning"
                onClick={(e) => {
                  handleSubmit(e);
                  handleClose();
                }}
              >
                Add Task
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodoInput;
