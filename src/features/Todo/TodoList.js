import { Todo } from "./Todo";

export const TodoList = () => {


    return (
        <div className='todo-list box'>
            <Todo />

        <div className='todo-filters-box'>
            <p className="items-left"> 5 Items left</p>
            <div className="filter-buttons">
                <button id='all-button' className="active-filter">All</button>
                <button id='active-button' className="">Active</button>
                <button id='completed-button' className="">Completed</button>
            </div>
            <button id='clear-completed-button'>Clear Completed</button>
        </div>
        </div>
    )
}