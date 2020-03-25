import React from 'react'

import { Link } from "react-router-dom";
import styles from "./MagListItem.module.css";

const MagListItem = ({ magazine }) => {

  return (
    <div className={styles.magazine}>
      <section className={styles.image}>
        <Link to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
          <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
        </Link>
      </section>
        <p className={styles.title}>{magazine.title}</p>
      <section className={styles.priceTag}>
        <span>{magazine.oneYearIssues}</span> :
        <span className={styles.price}>  {magazine.ourPrice}</span>
      </section>
      <Link className={styles.subscribe} to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
        <input className={styles.submit} type="submit" value="Subscribe" />
      </Link>      
    </div>
  )
}

export default MagListItem