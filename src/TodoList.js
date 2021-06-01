import React, { useState } from 'react';
import Todo from "./Todo";

const TodoList = () => {

  return (
    <div>
      {TodoList.map((todo) => {
        return <Todo todo={todo} />
      })}
    </div>
  )
}


export default TodoList;