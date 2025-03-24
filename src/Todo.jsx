import { useState, useEffect } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = ({ onLogout }) => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const taskExists = tasks.some((task) => task.content.toLowerCase() === inputValue.toLowerCase());
    if (taskExists) {
      alert("Task already exists!");
      setInputValue("");
      return;
    }

    const newTask = { id: Date.now(), content: inputValue, checked: false };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const clearAll = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDateTime(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo App</h1>
        <h2 className="date-time">{dateTime}</h2>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="todo-btn">Add Task</button>
        </form>
      </section>

      <section>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <span style={{ textDecoration: task.checked ? "line-through" : "none", color: task.checked ? "gray" : "black" }}>
                {task.content}
              </span>
              <button className="check-btn" onClick={() => toggleTaskCompletion(task.id)}>
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <button className="clear-btn" onClick={clearAll}>Clear All</button>
    </section>
  );
};

export default Todo;
