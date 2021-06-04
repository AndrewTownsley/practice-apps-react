import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, toggleComplete, filterComplete}) => {


  return (
    <div>
      {todos.map(todo => {
        return <Todo toggleComplete={toggleComplete} key={todo.id} todo={todo} />
      })}
      <button onClick={filterComplete}>Remove Completed</button>
    </div>
  )
}


export default TodoList;