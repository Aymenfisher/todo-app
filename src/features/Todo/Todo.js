import React from "react";


export const Todo = () => {

    return (
        <>
            <div className={`todo-item-box completed`}>
                <div className="todo-circle  outer-circle"><button className='inner-circle'></button></div>
                <div className="todo-text-container">
                    <p className='todo-text' >Complete Online Js Course</p>
                    <button id="delete-button" style={{ display: 'none' }}></button>
                </div>
            </div>
            <div className={`todo-item-box`}>
                <div className="todo-circle  outer-circle"><button className='inner-circle'></button></div>
                <div className="todo-text-container">
                    <p className='todo-text ' >Learn intermediate css course</p>
                    <button id="delete-button" style={{ display: 'none' }}></button>
                </div>
            </div>
            <div className={`todo-item-box`}>
                <div className="todo-circle  outer-circle"><button className='inner-circle'></button></div>
                <div className="todo-text-container">
                    <p className='todo-text ' >build an advanced app with react and redux</p>
                    <button id="delete-button" style={{ display: 'none' }}></button>
                </div>
            </div>
        </>
    )
}