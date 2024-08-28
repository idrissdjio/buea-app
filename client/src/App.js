import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/todos').then(response => setTodos(response.data));
  }, []);
  
  const addTodo = () => {
    axios.post('http://localhost:5001/api/todos', { title: newTodo }).then(response => {
      setTodos([...todos, response.data]);
      setNewTodo('');
    });
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={addTodo}
        >
          Add Todo
        </button>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
