import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompletion, deleteTodo } from "./todoSlice.js";


export const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handletoggleCompletion = () => {
        dispatch(toggleCompletion(todo.id))
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <>
            <div className={`todo-item-box ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-circle  outer-circle" ><button onClick={handletoggleCompletion} id="complete-button" className='inner-circle'></button></div>
                <div className="todo-text-container">
                    <p className='todo-text' onClick={handletoggleCompletion}>{todo.text}</p>
                    <button id="delete-button" onClick={handleDeleteTodo}></button>
                </div>
            </div>
        </>
    )
}