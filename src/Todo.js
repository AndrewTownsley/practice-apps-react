import React from 'react';

const Todo = ({todo, toggleComplete}) => {
// ({todo}) is a prop passed from the TodoList component.

  const handleClick = (e) => {
    e.preventDefault();
    toggleComplete(e.currentTarget.id);
    console.log(e.currentTarget);
  }

  return (
    <div 
      onClick={handleClick} 
      className={todo.complete ? "todo complete" : "todo"}
      id={todo.id}
      key={todo.id + todo.task}
      value={todo.id}
      name="todo"
    >
        {todo.task}
    </div>
  )
}


export default Todo;