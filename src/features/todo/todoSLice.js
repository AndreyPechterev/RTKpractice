import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toogleCompleted: (state,action) => {
            const toggelTodo = state.todos.find(todo => todo.id === action.payload)
            toggelTodo.completed = !toggelTodo.completed
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, toogleCompleted, deleteTodo} = todoSlice.actions
export default todoSlice.reducer