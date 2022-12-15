import React from 'react';



export const TodoForm = () => {

    return(
        <div className={'box form-box'}>
        <div className='form-circle outer-circle'><div className='inner-circle'></div></div>
        <form className='todo-form' >
            <input  type='text' id="todo-input" placeholder='Create a new todo...'></input>
        </form>
        </div>

    )
}