import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: crypto.randomUUID().slice(0, 5),
    title: "Go to class",
    completed: true,
  },
  { id: crypto.randomUUID().slice(0, 5), title: "Go to gym", completed: false },
  {
    id: crypto.randomUUID().slice(0, 5),
    title: "Go to movies",
    completed: true,
  },
];
const TodoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    AddTodos: {
      reducer: (state, action) => {
        // reducer run second
        return [action.payload, ...state];
      },
      prepare: (title) => {
        // prepare run first
        return {
          payload: {
            id: nanoid().slice(0, 5),
            title: title,
            completed: false,
          },
        };
      },
    },
    //    state.push(action.payload)

    RemovoTodo: (state, action) => {
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload.id);
    },
    ToggleCompleted: (state, action) => {
      state.forEach((todo) => {
        if (todo.id == action.payload) {
          todo.completed = !todo.completed;
        }
      });

      //   return state.map((item)=>{
      //     if(item.id==action.payload){
      //         return {...item,completed:!item.completed}
      //     }
      //     else{
      //         return item
      //     }
      //   })
    },
  },
});
export const { AddTodos, RemovoTodo, ToggleCompleted } = TodoSlice.actions;
const TodoReducer = TodoSlice.reducer;
export default TodoReducer;
