import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/Counter/Counter"


export const store =configureStore({
    reducer:{
        mycounter:counterReducer
    }
})