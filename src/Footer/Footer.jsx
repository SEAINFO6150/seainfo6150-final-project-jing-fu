import React from 'react'

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.categories}>
          <h5>Categories</h5>
          <Link className={styles.link} to="/aviation">Aviation</Link>
          <Link className={styles.link} to="/computer">Computer</Link>
          <Link className={styles.link} to="/engineering">Engineering</Link>
          <Link className={styles.link} to="/electronics">Electronics</Link>
          <Link className={styles.link} to="/science">Science</Link>
        </div>
        <div className={styles.contact}>
          <h5>Contact</h5>
          <div className={styles.about}> 
            <Link className={styles.link} to="/about">About us</Link>
          </div>
          <p className={styles.email}><a className={styles.link} href="mailto:techmagas@gmail.com">Email TechMags.com</a></p>
          <p className={styles.link}> Phone 1-800-022-1310</p>
        </div>
        <div className={styles.resources}>
          <h5>Resources</h5>
          <a className={styles.link} href="https://www.mixonline.com/">Mix</a>
          <a className={styles.link} href="https://www.codemag.com">CODE</a>
          <a className={styles.link} href="https://www.wired.com/">Wired</a>
          <a className={styles.link} href="https://www.discovermagazine.com/">Discover</a>
          <a className={styles.link} href="https://astronomy.com/">Astronomy</a>
          <a className={styles.link} href="http://engineeringmagazine.co.uk/">Engineering</a>
        </div>
        <div className={styles.payment}>
          <h5>Payment</h5>
          <img className={styles.image} src="/images/card-logo.jpg" alt="card logo" />
        </div>
      </div>

      <div className={styles.copyright}><p>© Copyright 1999-2020, TechMag Corporation. All Rights Reserved Privacy Policy Data Policy Washington Do Not Sell Terms and Conditions Agreement</p></div>
    </div>
  )
}

export default Footer