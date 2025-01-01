import { act, createContext, useContext, useEffect, useReducer } from "react";

export const CartContext = createContext();
let cartTotalLength;
function cartReducer(cart, action) {

   switch(action.type){
    case "ADDCART": {
        return [...cart,action.payload] 
     }
     case "INCREASEQUANTITY":{
      return cart.map((carts)=>{
          if(action.payload.id === carts.id){
          return {...carts ,quantity:carts.quantity+1}
        }
        else{
          return carts
        }
      })      
     }
     case "DECREASEQUANTITY":{
          return cart.map((item)=>{
            if(item.id === action.payload.id){
              return {...item, quantity:item.quantity-1}
            }
            else{
              return item
            }
          })
    }
  
    case "REMOVEITEM":{
        return cart.filter((item) => item.id !== action.payload.id)     
    }
     default:{
        return cart;
     }
   }
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const AddItem=(newCartItem)=>{
    dispatch({
        type:"ADDCART",
        payload:newCartItem
    })
  }
  const increaseItem=(id)=>{
    dispatch({
      type:"INCREASEQUANTITY",
      payload:{
        id:id
      }
    })
  }
  const decreaseItem=(id)=>{
    dispatch({
      type:"DECREASEQUANTITY",
      payload:{
        id:id
      }
    })
  }
  const removeItem=(id)=>{
    dispatch({
      type:"REMOVEITEM",
      payload:{
        id:id
      }
    })
  }
  function Totalcart(){
     let totalLength=0;
     for(let item of cart){
       totalLength += item.quantity
     }
     return totalLength
  }
  console.log("totalCart",Totalcart())

 
  return <CartContext.Provider value={{
    cart,dispatch,AddItem,increaseItem,decreaseItem,removeItem,Totalcart
  }}>{children}</CartContext.Provider>;
}

export function useCart(){
    return useContext(CartContext)
}

export default CartProvider;
