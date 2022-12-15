import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "./TodoList";

export const TodoContainer = ({theme,setTheme}) => {

    const handleSwitchTheme = () => {
        theme === 'dark'? setTheme('light') : setTheme('dark');
    }

    return(
        <div className="todo-container">
            <div className="todo-header">
                <p className="todo-title">TODO</p>
                <button className='theme-button' onClick={handleSwitchTheme}></button>
            </div>
            <div className="todo-body">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}