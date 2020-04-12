import React from 'react'

import styles from './ProductDetail.module.css';

import magazines from ".././data/magazines.json";
import { Link } from 'react-router-dom';

const ProductDetail = ({ categoryId, productId }) => {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  const magazine = magazines.find(magazine => magazine.categoryId === categoryId && magazine.productId === productId);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.productImage}>
          <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
        </div>
        <section className={styles.productPrice}>
          <h2 className={styles.title}>{magazine.name}</h2>
          <div className={styles.price}>
            <p className={styles.emphasis}>Our Price: ${magazine.ourPrice}</p>
            <p>Cover Price: <span className={styles.deletePrice}>${magazine.coverPrice}</span></p>
            <p>You Saved: {magazine.youSave}</p>
            {magazine.oneYearIssues}
          </div>
          <Link className={styles.checkout} to={`/order/${magazine.productId}`}>
            <div className={styles.submit}>Check Out</div>
          </Link>
        </section>
      </div>
      <div className={styles.productDesc}>
        <section className={styles.detailSection}>
          <h4>Product Detail:</h4>
          <div className={styles.details}>
            <div className={styles.row}>
              <div className={styles.firstCol}>Publisher:</div>
              <div className={styles.secCol}>{magazine.publisher}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.firstCol}>ISSN:</div>
              <div className={styles.secCol}>{magazine.ISSN}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.firstCol}>Founded:</div>
              <div className={styles.secCol}>{magazine.yearFounded}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.firstCol}>Editor:</div>
              <div className={styles.secCol}>{magazine.editor}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.firstCol}>Website: </div>
              <div className={styles.secCol}><a className={styles.website} href={magazine.website}>{magazine.website}</a></div>
            </div>
          </div>
        </section>
        <section className={styles.descriptionSection}>
          <h4>Product Description:</h4>
          <p className={styles.article}>{magazine.description}</p>
        </section>
      </div>
    </div >
  )
}

export default ProductDetail
