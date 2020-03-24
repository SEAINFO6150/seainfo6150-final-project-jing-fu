import React from 'react'

import { Link } from "react-router-dom";
import styles from "./MagList.module.css";

const MagList = ({ magazines }) => {

  return (
    <div className={styles.magList}>
      {magazines.map(magazine => (
        <div className={styles.magazine} key={magazine.title}>
          <div className={styles.image}>
            <Link to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
              <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
            </Link>
          </div>
          <h5 className={styles.title}>{magazine.title}</h5>
          <div className={styles.priceTag}>
            <span>{magazine.oneYearIssues}</span> :
            <span className={styles.price}>  {magazine.ourPrice}</span>
          </div>
          <Link className={styles.subscribe} to={`/product-detail/${magazine.categoryId}/${magazine.productId}`}>
            <input className={styles.submit} type="submit" value="Subscribe" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MagList