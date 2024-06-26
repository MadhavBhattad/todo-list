import { useState } from "react";

import React from "react";

import { useDispatch } from "react-redux";
import {addNewTodo} from '../redux/actions';


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addNewTodo(text));

        setText("");
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
            <form className="Form" onSubmit={onFormSubmit}>
                <input 
                    placeholder="Enter Todo..."
                    className="input"
                    onChange={onInputChange}
                    value={text}
                />
            </form>
    )
}

export default TodoForm;