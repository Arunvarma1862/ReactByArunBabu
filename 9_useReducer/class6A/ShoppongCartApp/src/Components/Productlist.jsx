import React from 'react'
import styles from "./Productlist.module.css"
import { useCart } from '../Provider/CartProvider'
import { toast, ToastContainer } from 'react-toastify';

function Productlist({id,title,img,price}) {
    const {cart,addCart}=useCart()
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
        addCart(newCartItem)
        toast.info("item added to cart succesfully",{
            position: "bottom-right",
            theme: "colored",
        })
       
    }

  return (
    <div className={styles.products}>
        <p>id:{id}</p>
        <img src={img} alt={title} style={{ height:"200px"}} />
        <p>title:{title}</p>
        <p>price:{price}</p>
        <button onClick={handleAddCartItem}>Add to cart</button>
    </div>
  )
}

export default Productlist