import {configureStore} from "@reduxjs/toolkit"
import todoreducer from "./Features/Todos/todoSlice"

export const store= configureStore({
   reducer:{
    mytodo:todoreducer
   }
}) 