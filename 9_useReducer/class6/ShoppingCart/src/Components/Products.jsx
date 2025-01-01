import React from "react";
import { products } from "../Store/products";
import Productlist from "./Productlist";
import styles from "./Products.module.css";
import Conatiner from "./UI/Conatiner";

function Products() {
  return (
    <Conatiner>
      <h1>Best of ARC</h1>
      <div className={styles.products}>
        {products.map((item) => {
          return <Productlist {...item} key={item.id} />;
        })}
      </div>
    </Conatiner>
  );
}

export default Products;
