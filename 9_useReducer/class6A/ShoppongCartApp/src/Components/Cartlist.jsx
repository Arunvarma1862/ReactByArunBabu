import React from 'react'
import { useCart } from '../Provider/CartProvider'

function Cartlist({id,title,price,img,quantity}) {

    const {IncQty,DecQty,RemQty}= useCart()

    function handleDecQty(){
        if(quantity <=1){
            return
        }
        DecQty(id)
    }
    function handleRemove(){
        RemQty(id)
    }

  return (
    <div style={{border:"1px solid blue", padding:"1rem" , margin:"1rem"}}>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>quantity:{quantity}</p>
        <p>price:{price*quantity}</p> 
        <button onClick={()=>{IncQty(id)}}>+</button> 
        <button onClick={handleDecQty}>-</button> 
        <button onClick={handleRemove}>X</button>   
    </div>
  )
}

export default Cartlist