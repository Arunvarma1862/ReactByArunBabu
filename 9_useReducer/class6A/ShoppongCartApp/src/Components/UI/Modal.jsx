import React from 'react'
import {createPortal} from "react-dom"
import styles from "./Modal.module.css"

function Modal({children,cartClose}) {
  return createPortal (
    <>
       <div className={styles.modalBackground} onClick={cartClose}></div>
       <div className={styles.cartModals}>{children}</div>
    </>,
    document.getElementById("modal")
   
  )
}

export default Modal