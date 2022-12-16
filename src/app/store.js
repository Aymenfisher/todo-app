import { configureStore } from '@reduxjs/toolkit';
import todos from '../features/Todo/todoSlice.js';
export const store = configureStore({
  reducer: {
    todos:todos
  },
});
