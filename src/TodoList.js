import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, toggleComplete}) => {

  return (
    <div>
      {todos.map(todo => {
        return <Todo toggleComplete={toggleComplete} key={todo.id} todo={todo} />
      })}
    </div>
  )
}


export default TodoList;