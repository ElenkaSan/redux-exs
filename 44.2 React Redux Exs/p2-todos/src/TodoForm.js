import React, { useState } from "react";
import { Button, Form, Input, FormGroup } from 'reactstrap';

function TodoForm({createTodo}){
    const [addTodo, setAddTodo] = useState('');

    function handleChange(e) {
        setAddTodo(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        createTodo(addTodo);
        setAddTodo('');
    }

    return (
        <div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
          <label className="h4" htmlFor="addTodo"> Add Your Todos:</label>
          <Input
            name="addTodo"
            type="text"
            onChange={handleChange}
            value={addTodo}
          />
          </FormGroup>
          <Button className="btn btn-info">Add a todo!</Button>
        </Form>
      </div>
    )

}

export default TodoForm;