import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  // Local state to track if the user is currently editing this specific todo item
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  // Local state to store the text while it is being edited
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  
  // Extracting the functions we need to modify this specific todo from the global Context
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  // Function called when the user saves their edits
  const editTodo = () => {
    // Calls the global context update function, passing this item's ID and the new updated object
    updateTodo(todo.id, {...todo, todo: todoMsg})
    // Turns off edit mode
    setIsTodoEditable(false)
  }

  // Function called when the checkbox is clicked
  const toggleCompleted = () => {
    // Calls the global context function to flip the completed status for this specific ID
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              // Change the background color if it is completed
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          {/* Checkbox to toggle completion */}
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          
          {/* Text Input for the actual Todo message */}
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              // Update the local todoMsg state as the user types
              onChange={(e) => setTodoMsg(e.target.value)}
              // Prevent typing if we aren't in "Edit mode"
              readOnly={!isTodoEditable}
          />
          {/* Edit / Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return; // Can't edit completed tasks

                  if (isTodoEditable) {
                      editTodo(); // If currently editing, hitting this button saves it
                  } else setIsTodoEditable((prev) => !prev); // Otherwise, enter edit mode
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)} // Calls the global context delete function
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;