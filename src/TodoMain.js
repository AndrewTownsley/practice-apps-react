import React, { useState} from 'react';
import data from "./data.json";
// Components
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoMain = () => {
  const [todos, setTodos] = useState(data);

  const toggleComplete = (id) => {
    let mapped = todos.map(task => {
      return task.id === Number(id) ? 
      { ...task, complete: !task.complete } : 
      { ...task};
    });
    setTodos(mapped);
  }

  const filterComplete = () => {
    let filtered = todos.filter(task => {
      return !task.complete;
    });
    setTodos(filtered);
  }

  const addTask = (newTask) => {
    let copy = [...todos];
    copy = [...copy, { 
      id: todos.length + 1, 
      task: newTask, 
      complete: false}];
    setTodos(copy);
  }

  return (
    <>
      <TodoHeader/>
      <TodoForm addTask={addTask} setTodos={setTodos}/>
      <TodoList toggleComplete={toggleComplete} filterComplete={filterComplete} todos={todos}/*todos is from our useState array. It will be passed to the component file where we can use it there.*/ />
    </>
  )
}

export default TodoMain;