import React, { act, useReducer } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'


export const CartContext= createContext()
function cartReducer(cart,action){
    switch(action.type){
        case "ADDCART":{
            return [...cart,action.payload.newCartItem]
        }
        case "INCQTY":{
            return cart.map((item)=>{
                if(action.payload.id === item.id){
                    return {...item,quantity:item.quantity+1}
                }
                else{
                    return item
                }
            })
        }
        case "DECQTY":{
            return cart.map((item)=>{
                if(action.payload.id===item.id){
                    return {...item,quantity:item.quantity-1}
                }
                else{
                    return item
                }
            })
        }
        case "REMQTY":{
            return cart.filter((item)=>{
                return item.id!== action.payload.id
            })
        }
        default:{
            return cart
        }
    }
}

function CartProvider({children}) {
    const [cart,dispatch]=useReducer(cartReducer,[])
    const addCart=(newCartItem)=>{
         dispatch({
                    type:"ADDCART",
                    payload:{
                        newCartItem:newCartItem
                    }
                })

    }
    const IncQty=(id)=>{
       dispatch({
        type:"INCQTY",
        payload:{
            id:id
        }
       })
    }
    const DecQty=(id)=>{
        dispatch({
         type:"DECQTY",
         payload:{
             id:id
         }
        })
     }
     const RemQty=(id)=>{
        dispatch({
         type:"REMQTY",
         payload:{
             id:id
         }
        })
     }
  return (
    <CartContext.Provider value={{cart,dispatch,addCart,IncQty,DecQty,RemQty}}>{children}</CartContext.Provider>
  )
}

export function useCart(){
    return useContext(CartContext)
}

export default CartProvider