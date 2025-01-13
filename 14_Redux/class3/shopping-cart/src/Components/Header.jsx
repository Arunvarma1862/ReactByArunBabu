import React, { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Carts from './Carts'
import {useSelector} from "react-redux"
import styles from "./Header.module.css"
import { BsCart } from "react-icons/bs";
import Container from "./UI/Container"

function Header() {
    const[isModalOpen,setModalOpen]=useState(false)
    const cart = useSelector((state)=>{
      return state.mycart
    })
    
    // let totalCartQty=0;
    // for(let item of cart){
    //     totalCartQty += item.quantity
    // }
    const TotalCartlength= cart.reduce((acc,item)=>{
        return acc+ item.quantity
      },0)
    function handleCart(){
        setModalOpen(true)
    }
    function cartClose(){
        setModalOpen(false)
    }
    useEffect(()=>{
        if(isModalOpen){
            document.documentElement.style.overflowY="hidden"
        }
        else{
             document.documentElement.style.overflowY="scroll"
        }
    },[isModalOpen])

  return (
    <header className={styles.header}>
        <Container>
        <nav className={styles.nav}>
            <h2 className={styles.logo}>ARC SHOPPING</h2>
            <div className={styles.cart} onClick={handleCart}>
                 <button className={styles.cartButtons}><BsCart/></button>
                 {TotalCartlength >0 && <span className={styles.number}>{TotalCartlength}</span>}
                 <span>Cart</span>
            </div>        
        </nav>
        </Container>
         {isModalOpen && <Modal cartClose={cartClose}>
           <Carts cartClose={cartClose}/>
        </Modal> }     
    </header>
  )
}

export default Header