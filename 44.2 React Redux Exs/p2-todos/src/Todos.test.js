import React from 'react';
import Todos from './Todos';
import {render, fireEvent, screen} from '@testing-library/react';

it('check render without crashing', function() {
    render(<Todos/>);
});

it('passing snapshot test', function() {
    expect(render(<Todos addTodo ="wish list"/>).asFragment()).toMatchSnapshot();
});

it('does not show the form by default and toggles on click', function(){
    render(<Todos addTodo ="update todo" updateTodos={()=> undefined}/>);
    
    expect(screen.queryByDisplayValue("update todo")).not.toBeInTheDocument();
    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    expect(screen.getByDisplayValue("update todo")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Done"));

});