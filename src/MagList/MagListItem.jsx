import React from 'react'

import { Link } from "react-router-dom";
import styles from "./MagListItem.module.css";

const MagListItem = ({ magazine }) => {

  return (
    <div className={styles.magazine}>
      <div className={styles.image}>
        <Link to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
          <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
        </Link>
      </div>
      <div className={styles.title}>
        <Link className={styles.titleLink} to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>{magazine.title}</Link>
      </div>
      <div className={styles.priceTag}>
        <p className={styles.mainPrice}>{magazine.oneYearIssues}:<span className={styles.price}> {magazine.ourPrice}</span></p>
        <p className={styles.discount}>Cover price: <span className={styles.deletePrice}>${magazine.coverPrice}</span></p>
        <p className={styles.discount}>You Saved: {magazine.youSave}</p>
      </div>
    </div>
  )
}

export default MagListItem