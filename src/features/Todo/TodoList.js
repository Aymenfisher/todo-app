import React, {useState} from 'react';
import { Todo } from "./Todo";
import { useSelector,useDispatch } from "react-redux";
import { selectTodos,deleteTodo } from "./todoSlice.js";

export const TodoList = () => {
    const [filter,setFilter] = useState('all') // all , active , or completed
    const dispatch = useDispatch();

    const allTodos = useSelector(selectTodos);

    const completedTodos=[];
    const activeTodos = [];

    allTodos.map((todo) => {
        todo.completed ? completedTodos.push(todo) : activeTodos.push(todo)
    })

    const todosToShow ={
        all: allTodos,
        active: activeTodos,
        completed: completedTodos
    }

    const handleClearItems = () =>{
        completedTodos.map((todo) => {
            dispatch(deleteTodo(todo.id))
        })
    }
    

    return (
        <div className="todos-and-filters">
            <div className='todo-list box'>
                {
                    todosToShow[filter].map((todo) =>{
                        return <Todo todo={todo}  key={todo.id}/>
                    })
                }
            </div>

            <div className='todo-filters-box'>
                <div className="clear-and-items box">
                    <p className="items-left"> {activeTodos.length} Items left</p>
                    <button id='clear-completed-button' onClick={handleClearItems}>Clear Completed</button>
                </div>

                <div className="filter-buttons box">
                    <button id='all-button' className={filter === 'all' ?  'active-filter' : ''} onClick ={() => { setFilter('all')}}>All</button>
                    <button id='active-button' className={filter === 'active' ?  'active-filter' : ''} onClick ={() => { setFilter('active')}}>Active</button>
                    <button id='completed-button' className={filter === 'completed' ?  'active-filter' : ''} onClick ={() => { setFilter('completed')}}>Completed</button>
                </div>

            </div>
        </div>
    )
}