import React from 'react'

import { Link } from "react-router-dom";

import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.categories}>
          <h4>List of categories</h4>
          <Link to="/aviation">Aviation</Link>
          <Link to="/computer">Computer</Link>
          <Link to="/engineering">Engineering</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/science">Science</Link>
        </div>
        <div className={styles.contact}>
          <h4>Contact Information</h4>
          <p>email <address>techmags@gmail.com</address></p>
        </div>
        <div className={styles.payment}>
          <h4>Payment Support</h4>
          <Link to={"/"}>
            <img className={styles.image} src="/images/card-logo.jpg" alt="card logo" />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}><p>© Copyright 2020, Corporation. All Rights Reserved Privacy Policy Data Policy Washington Do Not Sell Terms and Conditions Agreement</p></div>
    </div>
  )
}

export default Footer