import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addCart:(cart,action)=>{
            //immer js 
            cart.push(action.payload)
            // return [...cart,action.payload]
        },
        IncQty:(cart,action)=>{
            return cart.map((item)=>{
                if(action.payload.id === item.id){
                    return {...item,quantity:item.quantity+1}
                }
                else{
                    return item
                }
            })
        },
        DecQty:(cart,action)=>{
            return cart.map((item)=>{
                if(action.payload.id===item.id){
                    return {...item,quantity:item.quantity-1}
                }
                else{
                    return item
                }
            })
        },
        RemQty:(cart,action)=>{
            return cart.filter((item)=>{
                return item.id!== action.payload.id
            })
        },

    }
})

export const {addCart,IncQty,DecQty,RemQty} = cartSlice.actions

export default cartSlice.reducer

