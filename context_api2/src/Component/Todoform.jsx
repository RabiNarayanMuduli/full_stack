import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    // State to hold the current value of the input field
    const [todo, setTodo] = useState("")
    
    // Extracting the addTodo function from our global Context using the custom hook
    const {addTodo} = useTodo()

    // Function to handle form submission
    const add = (e) => {
      // Prevent the default browser behavior of refreshing the page on form submit
      e.preventDefault()

      // If the input is empty, do nothing
      if (!todo) return

      // Call the global addTodo function passing an object with the new todo text.
      // Date.id is generated in App.jsx so we only pass the text and completed status here
      addTodo({ todo, completed: false})
      
      // Clear the input field after adding
      setTodo("")
    }

  return (
      // When the form is submitted (e.g., user presses Enter or clicks Add), trigger the 'add' function
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              // Bind the input value to our local state
              value={todo}
              // Update the local state every time the user types a keystroke
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;