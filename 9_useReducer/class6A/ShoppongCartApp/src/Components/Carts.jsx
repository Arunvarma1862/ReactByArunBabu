import React from 'react'
import { useCart } from '../Provider/CartProvider'
import Cartlist from './Cartlist'
import { FaWindowClose } from "react-icons/fa";

function Carts({cartClose}) {
    const {cart} =useCart()
    let TotalAmount= cart.reduce((acc,item)=>{
        return acc+item.price*item.quantity
    },0)

    if(cart.length === 0){
        return (
        <>
             <h1 style={{textAlign:"center",position:"relative", top:"40%"}}>No items found!!!!!</h1>  
             <span onClick={cartClose} style={{position:"relative",right:"-820px", top:"-40px", fontSize:"30px"}}><FaWindowClose/></span>
        </>  
        )
    }
   
  return (
    <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", margin:" 0 1rem 1rem 1rem"}}>
        <h1>Shopping Cart</h1>
        <span onClick={cartClose} style={{fontSize:"24px", cursor:"pointer"}}><FaWindowClose/></span>
    </div>  
    <div>{cart.map((item)=>{
        return <Cartlist key={item.id} {...item}/>
    })}</div>
    <h1>TotalAmount :&#8377;{TotalAmount}</h1>
    </>
  )
}

export default Carts