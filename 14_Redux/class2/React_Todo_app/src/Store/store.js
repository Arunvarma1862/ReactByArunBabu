import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "../Features/Todos/TodoSlice"

export const store = configureStore({
    reducer:{
        myTodo:TodoReducer
    }
})