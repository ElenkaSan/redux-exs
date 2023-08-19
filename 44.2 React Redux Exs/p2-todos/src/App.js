import React from "react";
import './App.css';
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App text-light">
      <h1 className="text-center p-3">
        Time to create todo list.
      </h1>
      <TodoList/>
    </div>
  );
}

export default App;
