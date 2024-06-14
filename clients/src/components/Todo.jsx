import { useState } from "react";

import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";


export const Todo = ({todo}) => {

    const [editing,setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text));
    }

    return (
        <li className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "#DFD0B8" : "#fff"
            }}
            data-testid="todo-test"
            >
            <span style={{display: editing ? "none" : "inline"}}>{todo.data}</span>

            <form
                style={{display: editing ? "inline" : "none"}}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    defaultValue={text}
                    style={{display: editing ? "inline" : "none"}}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash"></i>
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-edit"></i>
            </span>
        </li>
    )
}

export default Todo;