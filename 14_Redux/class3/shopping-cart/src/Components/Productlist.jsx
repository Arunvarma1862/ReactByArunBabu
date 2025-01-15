import React from 'react'
import styles from "./Productlist.module.css"
import { addCart } from '../Features/Cart/cartSlice';
import {useSelector,useDispatch} from "react-redux"
import { toast} from 'react-toastify';

function Productlist({id,title,img,price}) {
     const dispatch =useDispatch()
     const cart =useSelector((state)=>state.mycart)
    
    function handleAddCartItem(){
         for(let item of cart){
            if(item.id ===id){
                return toast.error("item already added",{theme:"colored"})
            }
         }
      
        let newCartItem={
            id:id,
            img:img,
            title:title,
            price:price,
            quantity:1
        }
        dispatch(addCart(newCartItem))
        toast.info("item added to cart succesfully",{
            position: "bottom-right",
            theme: "colored",
        })
       
    }

  return (
    <div className={styles.products}>
        {/* <p>id:{id}</p> */}
        <img src={img} alt={title} className={styles.image} />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>&#8377;{price}</p>
        <button onClick={handleAddCartItem} className={styles.cartButton}>Add to cart</button>
    </div>
  ) 
}

export default Productlist