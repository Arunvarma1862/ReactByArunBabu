import React from 'react'
import { IncQty,DecQty,RemQty } from '../Features/Cart/cartSlice';
import styles from "./Cartlist.module.css"
import { IoCloseCircleSharp } from "react-icons/io5";
import {useDispatch} from "react-redux"

function Cartlist({id,title,price,img,quantity}) {
  const dispatch =useDispatch()

    function handleDecQty(){ 
        if(quantity <=1){
            return
        }
        dispatch(DecQty({id:id}))
    }
    function handleRemove(){
        dispatch(RemQty({id:id}))
    }

  return (

    <div className={styles.main}>
       <div className={styles.section1}>
           <div className="mainImage">
               <img src={img} alt={title}  className={styles.image}/>
           </div>
           <h4 className={styles.title}>{title}</h4>
       </div>
       <div className={styles.section2}>
        <div className={styles.cartControls}>
            <button onClick={handleDecQty} className={styles.cartButtons}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>{dispatch(IncQty({id:id}))}} className={styles.cartButtons}>+</button>    
        </div>
        <div>
              <p> &#8377; {price*quantity}</p> 
        </div>  
        <div className={styles.removeButton}>
             <button onClick={handleRemove}className={styles.cartButtons} ><IoCloseCircleSharp/></button> 
        </div>
          
       </div>
    </div>
  )
}

export default Cartlist





{/* <div style={{border:"1px solid blue", padding:"1rem" , margin:"1rem"}}>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>quantity:{quantity}</p>
        <p>price:{price*quantity}</p> 
        <button onClick={()=>{IncQty(id)}}>+</button> 
        <button onClick={handleDecQty}>-</button> 
        <button onClick={handleRemove}>X</button>   
    </div> */}