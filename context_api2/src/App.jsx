import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './Component/Todoform'
import TodoItem from './Component/TodoItem'

function App() {
  // Main state holding the list of all todos
  const [todos, setTodos] = useState([])

  // Logic to add a new todo.
  const addTodo = (todo) => {
    // We add the new todo at the start of the array (...prev keeps the old ones).
    // Date.now() is a simple way to generate a unique random ID.
    setTodos((prev) => [{id: Date.now(), todo: todo.todo, completed: false}, ...prev] )
  }

  // Logic to update an existing todo's text
  const updateTodo = (id, todo) => {
    // Map through todos. If we find the ID, replace it with the new 'todo' object. Otherwise, keep it as is.
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)))
  }

  // Logic to remove a todo
  const deleteTodo = (id) => {
    // Filter out the todo that has the matching ID
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  // Logic to toggle the completed status
  const toggleComplete = (id) => {
    // Map through, if ID matches, flip the 'completed' boolean to its opposite (!t.completed)
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  // --- LOCAL STORAGE EFFECTS --- //

  // 1. On Initial Load (Component Mount)
  // This runs exactly once because the dependency array [] is empty.
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      // If there are saved todos in the browser, parse them from string back to array and set them in state
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  // 2. On Any Change to the 'todos' array
  // This runs every single time the 'todos' state is updated.
  useEffect(() => {
    // Saves the current list of todos to the browser so they aren't lost on refresh.
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    // Wrap the entire app with TodoProvider.
    // We pass our state (todos) and our functions (addTodo, etc) into the 'value' prop.
    // Now, any component inside here can use useTodo() to access them!
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <h1 className='text-3xl text-center my-3 underline'>This is my app</h1>
    
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    
                    {/* Input form area */}
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    
                    {/* List of Todos area */}
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop through every todo in the state and render a TodoItem component for it */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
