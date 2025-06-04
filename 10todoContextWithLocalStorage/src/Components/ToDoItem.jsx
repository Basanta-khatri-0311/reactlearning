import { useState } from "react";
import { useToDo } from "../context/ToDoContext";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi"; // ✅ Icons

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo?.todoTitle || "");
  const { updateTodo, deleteTodo, toggleComplete } = useToDo();

  const editTodo = () => {
    updateTodo({ ...todo, todoTitle: todoMsg }, todo.id);
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center w-full max-w-md mx-auto mb-4 px-4 py-3 rounded-xl backdrop-blur-md shadow-md transition-all ${
        todo.completed ? "bg-green-100/60" : "bg-white/40"
      }`}
    >
      <input
        type="checkbox"
        className="mr-3 w-5 h-5 accent-purple-600"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`flex-grow bg-transparent text-base font-medium focus:outline-none ${
          isTodoEditable ? "border-b border-gray-400" : "border-none"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        className="ml-3 w-8 h-8 flex items-center justify-center text-white bg-purple-500 hover:bg-purple-600 rounded-full transition-all text-base"
        onClick={() => {
          if (todo.completed) return;
          isTodoEditable ? editTodo() : setIsTodoEditable(true);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <FiSave /> : <FiEdit />}
      </button>

      {/* Delete Button */}
      <button
        className="ml-2 w-8 h-8 flex items-center justify-center text-white bg-red-500 hover:bg-red-600 rounded-full transition-all text-base"
        onClick={() => deleteTodo(todo.id)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
}

export default TodoItem;
