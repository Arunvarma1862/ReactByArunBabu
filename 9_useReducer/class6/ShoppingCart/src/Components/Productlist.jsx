import React from "react";
import { useCart } from "../Contexts/CartProvider";
import { toast } from "react-toastify";
import styles from "./Productlist.module.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Productlist({ id, title, img, price }) {

  const{AddItem,cart}=useCart();
  function handleAddCart(){

    for(let item of cart){
      if(item.id===id){ 
        toast.error("item already added",{autoClose:1000,theme:"colored"});
        return
      }
      
    }
    let newCartItem={
        id:id,
        title:title,
        price:price,
        img:img,
        quantity:1
    }
    AddItem(newCartItem)
     toast.info("item added susccesfully",{autoClose:1000,position: "bottom-right",theme:"colored"})
  }
  return (
    <div className={styles.product}>
      {/* <p>id:{id}</p> */}
      <img src={img} alt={title} className={styles.productImages} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}><MdOutlineCurrencyRupee/>{price}</p>
      <button onClick={()=>{handleAddCart()} } className={styles.Addbutton}>Add to cart</button>
    </div>
  );
}

export default Productlist;
