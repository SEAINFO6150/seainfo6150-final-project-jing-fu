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
        <p className={styles.title}>{magazine.title}</p>
      <div className={styles.priceTag}>
        <span>{magazine.oneYearIssues}</span> :
        <span className={styles.price}>  {magazine.ourPrice}</span>
      </div>
      <div className={styles.subscribe}>
      <Link className={styles.submit} to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
        Subscribe
      </Link>  
      </div>
    </div>
  )
}

export default MagListItem