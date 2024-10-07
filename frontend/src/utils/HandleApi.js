import axios from "axios";

const API_URL = "http://localhost:5000";

const getTasks = async (setTodo) => {
  axios.get(`${API_URL}`).then(({ data }) => {
    setTodo(data);
  });
};

const addTask = async (title, note, priority, setTodo) => {
  axios
    .post(`${API_URL}/save`, {
      title,
      note,
      priority,
    })
    .then(({ data }) => {
      console.log("data => ", data);
      getTasks(setTodo);
    });
};

const deleteTask = async (_id, setTodo) => {
  axios
    .post(`${API_URL}/delete`, { _id })
    .then(() => {
      getTasks(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCurrentTask = async (_id, setCurrentTask) => {
  axios.get(`${API_URL}/`, { _id }).then(({ data }) => {
    setCurrentTask(data);
  });
};

export { getTasks, addTask, deleteTask, getCurrentTask };
