import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';

export const store=configureStore({
  reducer: todoReducer
})

//har ek applicaition ka ek hi store hotah hai jisko bola jaata hai single source of truth