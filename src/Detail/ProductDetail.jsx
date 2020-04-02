import React from 'react'

import styles from './ProductDetail.module.css';

import magazines from ".././data/magazines.json";
import { Link } from 'react-router-dom';

const ProductDetail = ({ categoryId, productId }) => {

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
            <p className={styles.emphasis}>Our price: ${magazine.ourPrice}</p>
            <p>Cover price: <span className={styles.deletePrice}>${magazine.coverPrice}</span></p>
            <p>You Saved: {magazine.youSave}</p>
            {magazine.oneYearIssues}
          </div>
          <div className={styles.submit}>
            <Link className={styles.checkout} to={`/order/${magazine.productId}`}>
              Check Out
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.productDesc}>
        <table className={styles.detail}>
          <tbody>
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
              <td><a className={styles.website} href={magazine.website}>{magazine.website}</a></td>
            </tr>
          </tbody>
        </table>
        <section className={styles.description}>
          <h4>Product Description:</h4>
          <p className={styles.article}>{magazine.description}</p>
        </section>
      </div>
    </div >
  )
}

export default ProductDetail
