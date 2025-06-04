import { useState } from "react";
import { useToDo } from "../context/ToDoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addToDo } = useToDo();

  const addtodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    addToDo({ todoTitle: todo, completed: false });
    setTodo("");
  };

  return (
    <form
      className="flex w-full max-w-md mx-auto mb-6 bg-white/30 backdrop-blur-md shadow-lg rounded-xl overflow-hidden"
      onSubmit={addtodo}
    >
      <input
        type="text"
        placeholder="Write a task..."
        className="flex-grow px-4 py-2 text-gray-800 placeholder:text-gray-500 bg-transparent focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
