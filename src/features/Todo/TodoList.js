import { Todo } from "./Todo";

export const TodoList = () => {


    return (
        <div className="todos-and-filters">
            <div className='todo-list box'>
                <Todo />
            </div>

            <div className='todo-filters-box'>
                <div className="clear-and-items box">
                    <p className="items-left"> 5 Items left</p>
                    <button id='clear-completed-button'>Clear Completed</button>
                </div>

                <div className="filter-buttons box">
                    <button id='all-button' className="active-filter">All</button>
                    <button id='active-button' className="">Active</button>
                    <button id='completed-button' className="">Completed</button>
                </div>

            </div>
        </div>
    )
}