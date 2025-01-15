import {configureStore} from "@reduxjs/toolkit"
import todoreducer from "./Features/todos/todo.Slice"

export const store=configureStore({
    reducer:{
        mytodo:todoreducer
    }
})