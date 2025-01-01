import React from 'react'
import Productlist from './Productlist'
import {product} from "../Store/ProductsData"

function Products() {
  return (
    <div>{product.map((item)=>{
        return <Productlist key={item.id} {...item}/>
    })}</div>
  )
}

export default Products