import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { addTodo } from '../features/Todo/todoSlice';
import { useDispatch } from 'react-redux';



export const TodoForm = () => {

    const [todoText,setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) =>{
        e.preventDefault();
        if(!todoText.trim()){
            setTodoText('')
            return
        }
        dispatch(addTodo(
            {
                id: uuidv4(),
                text: todoText.replace(/\s+/g, ' ').trim()
            }
        ))
        setTodoText('');
    }


    return(
        <div className={'box form-box'}>
        <div className='form-circle outer-circle'><div className='inner-circle'></div></div>
        <form className='todo-form' onSubmit={handleAddTodo}>
            <input  type='text' value={todoText} id="todo-input" placeholder='Create a new todo...' onChange={(e) => {setTodoText(e.target.value)}}></input>
        </form>
        </div>

    )
}