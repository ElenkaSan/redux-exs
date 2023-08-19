import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from 'reactstrap';

function Todos({addTodo, updateTodos, deleteTodos, id}){
    const [update, setUpdate] = useState(addTodo);
    const [ifUpdate, setIfUpdate] = useState(false);

    function handleChange(e) {
        setUpdate(e.target.value);
    }
    function doUpdate() {
        setIfUpdate(ev => ! ev);
    }
    function handleDelete() {
        deleteTodos(id);
    }
    function Updated(e) {
        e.preventDefault();
        updateTodos(id, update);
        setIfUpdate(false);
    }

    return (
        (ifUpdate) ?
        <div>
        <Form onSubmit={Updated}>
        <Row>
        <Col className="p-2">
          <Input
            type="text"
            value={update}
            onChange={handleChange}
          />
          <Button className="btn btn-success" >Done</Button>
        </Col>
          </Row>
        </Form>
        </div>
        :
        <div className="col-md-6 row">
            <Col className="p-2">
            <li className="lead">{update}</li>
            <Button className="btn btn-warning m-2" onClick={doUpdate}>Edit</Button>
            <Button className="btn btn-danger" onClick={handleDelete}>Remove</Button>
            </Col>
        </div>
    )
}

export default Todos;