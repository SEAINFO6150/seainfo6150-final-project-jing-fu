import React from 'react'
import MagList from "../MagList/MagList";
import {Link} from "react-router-dom";

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <img src="/images/treefrog.jpg" alt="tree frog" />
         <h3>Description</h3>
        <p>props:product description paragraph</p>
        </div>
        <div className={styles.right}>
         <h3>props:Product Name/title</h3>
         <p>props:Product price</p>
         <input className={styles.checkout} type="submit" value="Check out" />
         </div>
    </div>
  )
}

export default ProductDetail
