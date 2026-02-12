import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");

  const addTodo = () => {
    if (!data.trim()) return;

    setTodo( [...todo, data]);
    setData("");
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <h1 className="title">Todo List</h1>

        <div className="input-group">
          <input
            type="text"
            className="input-style"
            value={data}
            placeholder="Enter a todo..."
            onChange={e => setData(e.target.value)}
          />

          <button className="btn" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todo.map((val, index) => (
            <li key={index} className="todo-item">
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
