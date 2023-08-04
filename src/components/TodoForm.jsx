import React from 'react'
import { useState } from 'react'

const TodoForm = ( { addTodo } ) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("")
        setCategory("")
    };

  return (
    <div className='todo-form'>
        <h2>Make a task</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Write Title' 
            value = {value} 
            onChange={(e) => setValue(e.target.value)}/>
            <select value = {category} 
            onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose the category</option>
                <option value="Family">Family</option>
                <option value="Personal">Personal</option>
                <option value="Studies">Studies</option>
                <option value="Projects">Projects</option>
            </select>
            <button type='submit'>Make Task</button>
        </form>
    </div>
  )
}

export default TodoForm