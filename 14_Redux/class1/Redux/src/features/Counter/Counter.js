import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 ,username:"virat"},
   reducers:{
     increment:(state)=>{
        // return {...state,count:state.count +1}
        state.count +=1
     },
     decrement:(state)=>{
        state.count -=1
     },
     Reset:(state)=>{
        state.count =0
     }

   }
});
export const{increment,decrement,Reset}=counterSlice.actions
const counterReducer = counterSlice.reducer;
export default counterReducer;
