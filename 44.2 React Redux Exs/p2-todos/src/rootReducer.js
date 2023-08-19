import { v4 as uuid } from 'uuid';
// import uuid from "uuid/v4"

const INITIAL_STATE = { todo: [], 
                        updateTodos: [] };

function rootReducer(state=INITIAL_STATE, action){
    if(action.type === "Add"){
        return {
            ...state, todo: [...state.todo, {addTodo: action.addTodo, id: uuid()}]
        }
    }
    if(action.type === "Update") {
        const updateTodos = state.updateTodos.map(updateTodo => {
            if(updateTodo.id === action.id) {
                return {...updateTodo,addTodo: action.updatedTodo}
            }
            return updateTodo
        })
        return {...state, updateTodos}
    }
    if(action.type === "Remove") {
        return {...state, todo: state.todo.filter(removeTodo => removeTodo.id !== action.id)}
    }
    return state;
}

export default rootReducer