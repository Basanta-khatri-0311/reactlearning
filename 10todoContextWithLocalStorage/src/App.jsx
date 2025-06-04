import { useEffect, useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import { ToDoForm, ToDoItem } from "./Components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };

  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    if (toDos && toDos.length > 0) {
      setTodos(toDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addToDo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-purple-300 p-6">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
          🌟 My Tasks
        </h1>

        <ToDoForm />
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </ToDoProvider>
  );
}

export default App;
