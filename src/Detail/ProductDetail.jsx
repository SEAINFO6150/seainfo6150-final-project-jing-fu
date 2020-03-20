import React from 'react'

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  return (
    <div className={styles.container}>
        <section className={styles.productDesc}>
        <img src="/images/treefrog.jpg" alt="tree frog" />
         <h3>Description</h3>
        <p>props:product description paragraph</p>
        </section>
        <section className={styles.ProductPrice}>
         <h3>props:Product Name/title</h3>
         <p>props:Product price</p>
         <input className={styles.checkout} type="submit" value="Check out" />
         </section>
    </div>
  )
}

export default ProductDetail
