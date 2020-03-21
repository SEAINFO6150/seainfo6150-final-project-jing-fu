import React from 'react'

import styles from "./MagList.module.css";

const MagList = ({ magazines }) => {

  return (
    <div className={styles.magList}>
      {magazines.map(magazine => (
        <div className={styles.magazine} key={magazine.title}>
          <div className={styles.image}>
            <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
          </div>
          <h5 className={styles.title}>{magazine.title}</h5>
          <div className={styles.priceTag}>
            <span>{magazine.oneYearIssues}</span> :
            <span className={styles.price}>{magazine.ourPrice}</span>
          </div>
          <input className={styles.subscribe} type="submit" value="Subscribe" />
        </div>
      ))}
    </div>
  )
}

export default MagList