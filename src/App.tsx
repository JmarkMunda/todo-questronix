import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { TodoType } from "./components/Todo/types";
import Modal from "./components/Modal";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([{ id: 1, name: "John" }]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (!editId) {
      setTodos([...todos, { id: todos.length + 1, name: inputValue }]);
    } else {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, name: inputValue } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    }
    setInputValue("");
    setShowModal(false);
  };

  const handleEdit = (id: number) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    if (!selectedTodo) return;
    setInputValue(selectedTodo!.name);
    setEditId(selectedTodo.id);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleOnChangeText = (value: string) => {
    setInputValue(value);
  };

  const handleClose = () => {
    setInputValue("");
    setEditId(null);
    setShowModal(false);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <button
          style={{
            padding: 16,
            background: "green",
            color: "white",
          }}
          onClick={() => setShowModal(true)}>
          Add
        </button>
      </div>

      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {showModal && (
        <Modal
          editId={editId}
          inputValue={inputValue}
          handleOnChangeText={handleOnChangeText}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;

