import React from 'react'
import { useCart } from '../Contexts/CartProvider'
import CartList from './CartList'
import styles from "./Cart.module.css"
import { IoClose } from "react-icons/io5";


function Cart({ closeModal}) {
    const {cart}=useCart()
    
    if(cart.length===0){
      return <h1 style={{textAlign:"center"}}>Not items founds<button onClick={closeModal} style={{position:"relative",left:"25%", top:"-10%"}}>X</button></h1>
    }
    // let totalAmount=0;
    // for(let item of cart){
    //   totalAmount += item.price* item.quantity
    // }

    let totalAmount= cart.reduce((acc,item)=>{
      return acc + item.price*item.quantity
    },0)
  return (
    <div className={styles.cart}>
        <h1 className={styles.cartHeading}>Shopping cart</h1>
         <span onClick={closeModal} className={styles.closeButton}><IoClose/></span>
         <div>{cart.map((carts)=>{
        return <CartList {...carts} key={carts.id}/>
         })}</div>
        <h1>Total Amount : &#8377;{totalAmount}</h1>
    </div> 
  )
}

export default Cart