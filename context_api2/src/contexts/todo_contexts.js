import {createContext, useContext} from "react"
// 1. Create the Context. This acts as the "Blueprint" or central store.
// We pass in default values so React knows the shape of the data we expect to share.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // These functions don't do anything here, they just define the blueprint.
    // The actual logic is implemented in App.jsx where the Provider is used.
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// 2. Create a custom hook for convenience.
// Instead of importing useContext and TodoContext in every file,
// components can simply import and call useTodo() to grab the data.
export const useTodo = () => {
    return useContext(TodoContext)
}

// 3. Export the Provider. 
// We will wrap our main application with this Provider in App.jsx
// so that all components inside can access the Context data.
export const TodoProvider = TodoContext.Provider 