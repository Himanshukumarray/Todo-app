// import { useState } from "react"
// import "./todo.css"

// import { MdCheck, MdDeleteForever } from "react-icons/md";


// export const Todo = () => {
//     const [inputvalue, setInputvalue] = useState();
//     const [task, setTask] = useState([]);

//     const handleInputChange = (value) => {
//         setInputvalue(value);
//     }

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputvalue) return;

//         if (task.includes(inputvalue)) {
//             setInputvalue("")
//             return;
//         }
//         setTask((prevTask) => [...prevTask, inputvalue]);

//         setInputvalue("")
//     }

//     return (
//         <section className='todo-container'>
//             <header>
//                 <h1>Todo List</h1>
//             </header>

//             <section className='form'>
//                 <form onSubmit={handleFormSubmit}>
//                     <div>
//                         <input
//                             type="text"
//                             className='todo-input'
//                             autoComplete='off'
//                             value={inputvalue}
//                             onChange={(event) => handleInputChange(event.target.value)}
//                         />
//                     </div>

//                     <div>
//                         <button type="submit" className="todo-btn">Add Task</button>
//                     </div>

//                 </form>
//             </section>

//             <section>
//                 <ul>
//                     {
//                         task.map((curTask, index) => {
//                             return <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn">
//                                     <MdCheck />
//                                 </button>
//                                 <button className="delete-btn">
//                                     <MdDeleteForever />
//                                 </button>
//                             </li>
//                         })}
//                 </ul>
//             </section>

//         </section>
//     )
// }


import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputvalue, SetInputvalue] = useState();
    const [task, setTask] = useState([]);

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

    return (
        <section className="todo-container">
            <header>
                <h1>Todo App</h1>
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
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })}
                </ul>
            </section>

        </section>
    )

}

export default Todo
