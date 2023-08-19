import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);

    function handleCreate(addTodo) {
        dispatch({
            type: "Add",
            addTodo
        })
    }

    function handleChange(id, updateTodo) {
        dispatch({
            type: "Update",
            id,
            updateTodo
        })
    }

    function handleDelete(id) {
        dispatch({
            type: "Remove",
            id
        })
    }

    const addingTodos = todos.map(todo => (
        <Todos
          key={todo.id}
          id={todo.id}
          addTodo={todo.addTodo} 
          updateTodos={handleChange}
          deleteTodos={handleDelete}
         />
    ))

    return (
        <section className="container">
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <TodoForm createTodo={handleCreate} />
            <ol>{addingTodos}</ol>
        </div>
        </section>
    )

}

export default TodoList;