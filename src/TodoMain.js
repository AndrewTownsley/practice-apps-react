import React, { useState} from 'react';
import data from "./data.json";
// Components
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

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

  return (
    <>
    <TodoHeader/>
    <TodoList toggleComplete={toggleComplete} todos={todos}/*todos is from our useState array. It will be passed to the component file where we can use it there.*/ />
    </>
  )
}

export default TodoMain;