import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <h1 className="heading">To-Do List</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => {
        <li>{t.todo}</li>;
      })}
    </>
  );
}

export default App;
