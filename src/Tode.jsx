import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputvalue, SetInputvalue] = useState();
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        SetInputvalue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputvalue) return;

        if (task.includes(inputvalue)) {
            SetInputvalue("")
            return;
        }

        setTask((prevTask) => [...prevTask, inputvalue]);
        SetInputvalue("");
    }

    const deleteTask = (indextodelete) =>{
        setTask(task.filter((_,index)=> index != indextodelete))
    };

    const clearall = () =>{
        setTask ([])
    }

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();


        setDateTime (`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return (
        <section className="todo-container">
            <header>
                <h1>Todo App</h1>
                <h2 className="date-time"> {dateTime} </h2>
            </header>

            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <input type="text"
                        className='todo-input'
                        autoComplete='off'
                        value={inputvalue}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                    <button type="submit" className="todo-btn">Add Task</button>
                </form>
            </section>

            <section>
                <ul>
                    {
                        task.map((currtask, index) => {
                            return <li key={index} className="todo-item" >
                                <span>{currtask}</span>

                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn" onClick={() => deleteTask(index)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })}
                </ul>
            </section>

            <button className="clear-btn" onClick={clearall}>Clear All</button>

        </section>
    )
}

export default Todo
