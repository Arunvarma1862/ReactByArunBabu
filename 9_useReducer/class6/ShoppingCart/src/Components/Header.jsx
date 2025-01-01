import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useCart } from '../Contexts/CartProvider'
import styles from "./Header.module.css"
import Conatiner from "./UI/Conatiner";
import { BsCartFill } from "react-icons/bs";


function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const {cart}=useCart() 
  function closeModal(){
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

  // let TotalCartLength=0
  // for(let item of cart){
  //  TotalCartLength += item.quantity
  // }

  const TotalCartlength= cart.reduce((acc,item)=>{
    return acc+ item.quantity
  },0)


  return (
    <header className={styles.header}>
      <Conatiner >
      <nav className={styles.nav}>
        <h1>ARC Shopping</h1>
        <button className={styles.showCartButton} onClick={()=>{setModalOpen(true)}}>
          <span className={styles.cartIconAndNumber}><BsCartFill />
              {TotalCartlength>0 && <span className={styles.number} >{TotalCartlength}</span> }
          </span>                       
          <span className={styles.cartText}>Cart</span>
        </button>
      </nav>
      </Conatiner>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart  closeModal={closeModal}/>
        </Modal>
      )}
    </header>
  );
}

export default Header;
