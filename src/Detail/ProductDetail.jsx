import React from 'react'

import styles from './ProductDetail.module.css';

import magazines from ".././data/magazines.json";
import { Link } from 'react-router-dom';

const ProductDetail = ({ categoryId, productId }) => {

  const magazine = magazines.find(magazine => magazine.categoryId === categoryId && magazine.productId === productId);

  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <section className={styles.productImage}>
          <img className={styles.img} src={magazine.image._url} alt={magazine.title} />
        </section>
        <section className={styles.productPrice}>
          <div className={styles.title}>
            <h2>{magazine.name}</h2>
          </div>
          <div className={styles.price}>
            <p className={styles.emphasis}>Our price: {magazine.ourPrice}</p>
            <p>Cover price: <span className={styles.deletePrice}>{magazine.coverPrice}</span></p>
            <p>You Saved: {magazine.youSave}</p>
            {magazine.oneYearIssues}
          </div>
          <div className={styles.submit}>
            <Link to="/order">
            <input className={styles.checkout} type="submit" value="Check out" />
            </Link>
          </div>
        </section>
      </section>
      <section className={styles.productDesc}>
        <table className={styles.detail}>
          <tr>
            <th>Product</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>Publisher:</td>
            <td>{magazine.publisher}</td>
          </tr>
          <tr>
            <td>ISSN:</td>
            <td>{magazine.ISSN}</td>
          </tr>
          <tr>
            <td>Year Founded:</td>
            <td>{magazine.yearFounded}</td>
          </tr>
          <tr>
            <td>Editor:</td>
            <td>{magazine.editor}</td>
          </tr>
          <tr>
            <td>Learn More: </td>
            <td><a href={magazine.website}>{magazine.website}</a></td>
          </tr>
        </table>
        <section className={styles.description}>
          <h4>Product Description:</h4>
          <article><p className={styles.article}>{magazine.description}</p></article>
        </section>
      </section>

    </div >
  )
}

export default ProductDetail
