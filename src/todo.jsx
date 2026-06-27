import React, { useState } from 'react'

function Todolist(){
    const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input === '') return
    setTodos([...todos, input])
    setInput('')
  }

  const deleteTodo = (index) => {
    const newtodos = todos.filter((_, i)=> i !== index)
    setTodos(newtodos)
  }

  return (
    <div>
      <div className="container">
      <h1>My Todo App</h1>
      <input 
        type="text" 
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Todolist