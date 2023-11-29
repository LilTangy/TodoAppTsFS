import { createSlice } from "@reduxjs/toolkit";
import {Todo, TodosSchema} from "../types/TodoSchema.ts";


const initialState: TodosSchema = {
    todos: [],
    count: 0
}


export const counterSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state: TodosSchema, action) => {
            const todo: Todo = {
                id: String(Math.random() * 100),
                text: action.payload,
                type: "open"
            };
            state.todos.push(todo);
            state.count+= 1;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo: Todo) => todo.id !== action.payload)
            state.count -= 1;
        },
        closeTodo: (state, action) => {
            state.todos.forEach(item => {
                if (item.id === action.payload) {
                    item.type = "close";
                }
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { actions: todoActions } = counterSlice
export const { reducer: todoReducer } = counterSlice
