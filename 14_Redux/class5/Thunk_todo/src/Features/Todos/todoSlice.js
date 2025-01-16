import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8002/todos");
  //  console.log(response)
  //  console.log(response.data)
  await pause(1500);
  return response.data;
});

export const addTodos = createAsyncThunk("todos/add", async (title) => {
  const response = await axios.post("http://localhost:8002/todos", {
    title: title,
    completed: false,
  });
  // console.log(response.data)
  await pause(1500);
  return response.data;
});

export const deleteTodos = createAsyncThunk("todos/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8002/todos/${id}`);
  //   console.log(response)
  //   console.log(response.data)
  return id;
});
export const ToggleTodos = createAsyncThunk(
  "todos/toggle",
  async ({id, completed ,title}) => {
    const response = await axios.patch(`http://localhost:8002/todos/${id}`, {
      completed: !completed,
      title:title
    });
    console.log(response);
    console.log(response.data);
    return response.data;
  }
);

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("Pending state");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fullfilled state");
      // console.log(state)
      // console.log(action.payload)
      state.data = action.payload;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected State");
      console.log(action.error?.message);
    });
    builders.addCase(addTodos.fulfilled, (state, action) => {
      state.data.unshift(action.payload);
    });
    builders.addCase(deleteTodos.fulfilled, (state, action) => {
      //  console.log(action)
      state.data = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
      
      })
      builders.addCase(ToggleTodos.fulfilled,(state,action)=>{
        console.log(action.payload.id)
       state.data.forEach((todo)=>{
         if(todo.id == action.payload.id){
             todo.completed = action.payload.completed
             todo.title=action.payload.title
         }
         else{
             return todo
         }
       });
    })
  }
});

export default todoSlice.reducer;
