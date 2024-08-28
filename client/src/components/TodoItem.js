import React from 'react';

function TodoItem({ todo }) {
  return (
    <li className="p-2 border-b flex justify-between items-center">
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoItem;
