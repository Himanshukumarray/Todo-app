import { useState, useEffect } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submit (Add task)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
  
    // Check if task already exists (case-insensitive)
    const taskExists = tasks.some((task) => task.content.toLowerCase() === inputValue.toLowerCase());
    if (taskExists) {
      alert("Task already exists!");
      setInputValue("");
      return;
    }
  
    const newTask = {
      id: Date.now(),
      content: inputValue,
      checked: false, // Task starts as unchecked
    };
  
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task
    setInputValue(""); // Clear input field  
  };

  // Toggle task completion (Check button)
  const toggleTaskCompletion = (id) => {
    console.log("Toggling task:", id); // Debugging log

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      );
      console.log("Updated Tasks:", updatedTasks); // Debugging
      return updatedTasks;
    });
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Clear all tasks
  const clearAll = () => {
    setTasks([]);
  };

  // Update date-time every second
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
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>

      <section>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <span style={{ textDecoration: task.checked ? "line-through" : "none", color: task.checked ? "gray" : "black" }}>
                {task.content}
              </span>

              <button
                className="check-btn"
                style={{ backgroundColor: task.checked ? "green" : "transparent", color: task.checked ? "white" : "black" }}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                <MdDeleteForever />
              </button>
            </li>

          ))}
        </ul>
      </section>

      <button className="clear-btn" onClick={clearAll}>
        Clear All
      </button>
    </section>
  );
};

export default Todo;
