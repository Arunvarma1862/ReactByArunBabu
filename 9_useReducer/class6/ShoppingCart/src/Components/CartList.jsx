import React from "react";
import { useCart } from "../Contexts/CartProvider";
import styles from "./Cartlist.module.css"
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

function CartList({ id, img, title, price,quantity }) {

  const {increaseItem,decreaseItem,removeItem} =useCart()

  function handleIncrease(){
    increaseItem(id)
  } 
  
  function handleDecrease(){
    if(quantity<=1){
      return
    }
    decreaseItem(id)
  }
  function handleDelete(){
    removeItem(id)
  }

  return (
     
    <div className={styles.cartItem}>
      <div className={styles.imgandtitle}>
        <div className={styles.ImgContainer}><img src={img} alt={title} className={styles.cartImage}/></div>
        <h4 className={styles.title}>{title}</h4>
    </div>
    <div className={styles.otherControls}>
      <div className={styles.qtyInput}>
         <button onClick={()=>{handleDecrease(id)}}><FiMinus/></button>
         <span className={styles.quantity}>{quantity}</span>
         <button onClick={()=>{handleIncrease(id)}}><FaPlus/></button>  
      </div>
      <p className={styles.price}> &#8377;{price * quantity } </p>
      <button onClick={()=>{handleDelete(id)}} className={styles.cartClose}><IoCloseCircleSharp/></button>
    </div> 
       </div>
  ); 
}

export default CartList;



   {/* <div  style={{ padding: "1rem", margin: "1rem", border: "2px solid blue" }}>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>quantity:{quantity}</p>
        <p>price:{price * quantity } </p>
        <button onClick={()=>{handleIncrease(id)}}>+</button>
        <button onClick={()=>{handleDecrease(id)}}>-</button>
        <button onClick={()=>{handleDelete(id)}}>X</button>
      </div> */}