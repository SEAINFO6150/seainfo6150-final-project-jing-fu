import React from 'react'

import { Link } from "react-router-dom";

import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.categories}>
          <h4>List of categories</h4>
          <Link className={styles.link} to="/aviation">Aviation</Link>
          <Link className={styles.link} to="/computer">Computer</Link>
          <Link className={styles.link} to="/engineering">Engineering</Link>
          <Link className={styles.link} to="/electronics">Electronics</Link>
          <Link className={styles.link} to="/science">Science</Link>
        </div>
        <div className={styles.contact}>
          <h4>Contact Information</h4>
          <p className={styles.email}> Email <a className={styles.link} href="mailto:techmagas@gmail.com">TechMags.com</a></p>
        </div>
        <div className={styles.payment}>
          <h4>Payment Support</h4>
          <img className={styles.image} src="/images/card-logo.jpg" alt="card logo" />
        </div>
      </div>
      <div className={styles.copyright}><p>© Copyright 1999-2020, TechMag Corporation. All Rights Reserved Privacy Policy Data Policy Washington Do Not Sell Terms and Conditions Agreement</p></div>
    </div>
  )
}

export default Footer