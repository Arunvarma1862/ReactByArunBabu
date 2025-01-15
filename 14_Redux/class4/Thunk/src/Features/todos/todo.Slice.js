import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todo");
  console.log(response.data);
  await pause(1000);
  return response.data;
});

export const addTodos = createAsyncThunk("todos/add", async (title) => {
  const response = await axios.post("http://localhost:8001/todo", {
    Title: title,
    completed: false,
  });
  await pause(1500);
  return response.data;
});
export const removeTodo = createAsyncThunk("todos/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8001/todo/${id}`);
  console.log(response);
  return id;
});
export const toggleTodo = createAsyncThunk(
  "todos/toggle",
  async ({ id, completed }) => {
    const response = await axios.patch(`http://localhost:8001/todo/${id}`, {
      completed: !completed,
    });
    console.log("toggle", response.data);
    return response.data;
  }
);

const pause = (duartion) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duartion);
  });
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("pending state...");
    });

    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fulfilled state state...");
      console.log(action.payload);
      state.data = action.payload;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected state...");
      state.error = action.error.message;
      console.log(action.error);
      console.log(action.error.message);
    });
    builders.addCase(addTodos.pending, (state, action) => {
      console.log("pending state...");
    });
    builders.addCase(addTodos.fulfilled, (state, action) => {
      console.log("fulfilled state state...");
      state.data.push(action.payload);
    });
    builders.addCase(addTodos.rejected, (state, action) => {
      console.log("rejected state...");
      state.error = action.error.message;
    });
    builders.addCase(removeTodo.pending, (state, action) => {
      console.log("pending state...");
    });
    builders.addCase(removeTodo.fulfilled, (state, action) => {
      console.log("fulfilled state...");
      console.log(action.payload);
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    });
    builders.addCase(removeTodo.rejected, (state, action) => {
      console.log("rejected state...");
      state.error = action.error.message;
    });
    builders.addCase(toggleTodo.pending, (state, action) => {
      console.log("pending state...");
    });
    builders.addCase(toggleTodo.fulfilled, (state, action) => {
      console.log("fulfilled state...");
      console.log(action.payload);
      state.data.forEach((todo) => {
        if (todo.id == action.payload.id) {
          todo.completed = action.payload.completed;
        } else {
          return todo;
        }
      });
    });
    builders.addCase(toggleTodo.rejected, (state, action) => {
      console.log("rejected state...");
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
