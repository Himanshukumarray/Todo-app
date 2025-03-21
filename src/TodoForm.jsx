import { useState } from "react";

export const TodoForm = ({})

return (
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
)