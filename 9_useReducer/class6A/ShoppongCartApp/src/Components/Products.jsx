import React from 'react'
import Productlist from './Productlist'
import {product} from "../Store/ProductsData"
import styles from "./Products.module.css"
import Container from "./UI/Container"

function Products() {
  return (
    <Container>
    <h1>Best of ARC</h1>
    <div className={styles.products}>{product.map((item)=>{
        return <Productlist key={item.id} {...item}/>
    })}</div>
    </Container>
  )
}

export default Products