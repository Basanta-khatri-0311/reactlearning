import { createContext ,useContext, useState } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todoTitle:"Message",
            completed:false
        }
    ], 
    addToDo : (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})
export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider

