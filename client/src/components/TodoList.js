import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul className="mt-4">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
