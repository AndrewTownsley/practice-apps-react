import React, { useState } from 'react';

const TodoForm = ({addTask}) => {
  const [newTask, setNewTask] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("")
  } 

  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  return (
    <form action="submit">
      <label htmlFor="todoInput">Add Task</label>
      <input 
        onChange={handleChange}  
        value={newTask} 
        id="todoInput" 
        type="text" 
        placeholder="add task..." 
      />
      <button onClick={addTodo}>+ Add</button>
    </form>
  )
}

export default TodoForm;