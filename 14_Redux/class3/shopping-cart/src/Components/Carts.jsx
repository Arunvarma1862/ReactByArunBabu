import React from 'react'
import {useSelector} from "react-redux"
import Cartlist from './Cartlist'
import { FaWindowClose } from "react-icons/fa";
import Container from "./UI/Container"
import styles from "./Carts.module.css"

function Carts({cartClose}) {
    const cart = useSelector((state)=>{
         return state.mycart
       }) 
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
    <Container>
    <div className={styles.cart}>
        <h2 className={styles.headings}>Shopping Cart</h2>
        <span onClick={cartClose} className={styles.closeButton}><FaWindowClose/></span>
    </div>  
    <div>{cart.map((item)=>{
        return <Cartlist key={item.id} {...item}/>
    })}</div>
    <h1>TotalAmount :&#8377; {TotalAmount}</h1>
    </Container>
  )
}

export default Carts