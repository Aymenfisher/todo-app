import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const todos = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state[action.payload.id] = {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            }
        },
        toggleCompletion: (state, action) => {
            state[action.payload].completed = !state[action.payload].completed
        },
        deleteTodo: (state, action) => {
            delete state[action.payload]
        }
    }
});


export const selectTodos = (state) => {
    return Object.values(state.todos);
};


export const { addTodo, toggleCompletion, deleteTodo } = todos.actions;

export default todos.reducer;