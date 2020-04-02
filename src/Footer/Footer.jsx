import React from 'react'

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <section className={styles.categories}>
          <h5>Categories</h5>
          <Link className={styles.link} to="/category/avia-001">Aviation</Link>
          <Link className={styles.link} to="/category/comp-001">Computer</Link>
          <Link className={styles.link} to="/category/eng-001">Engineering</Link>
          <Link className={styles.link} to="/category/elec-001">Electronics</Link>
          <Link className={styles.link} to="/category/sci-001">Science</Link>
        </section>
        <section className={styles.contact}>
          <h5>Contact</h5>
          <div className={styles.about}>
            <Link className={styles.link} to="/about">About us</Link>
          </div>
          <p className={styles.email}><a className={styles.link} href="mailto:techmagas@gmail.com">Email TechMags.com</a></p>
          <p className={styles.link}> Phone 1-800-022-1310</p>
        </section>
        <section className={styles.resources}>
          <h5>Resources</h5>
          <a className={styles.link} href="https://www.mixonline.com/">Mix</a>
          <a className={styles.link} href="https://www.codemag.com">Code</a>
          <a className={styles.link} href="https://www.wired.com/">Wired</a>
          <a className={styles.link} href="https://www.discovermagazine.com/">Discover</a>
          <a className={styles.link} href="https://astronomy.com/">Astronomy</a>
          <a className={styles.link} href="http://engineeringmagazine.co.uk/">Engineering</a>
        </section>
        <section className={styles.payment}>
          <h5>Payment</h5>
          <img className={styles.image} src="/images/card-logo.jpg" alt="card logo" />
        </section>
      </div>
      <div className={styles.copyright}><p>© Copyright 1999-2020, TechMag Corporation. All Rights Reserved Privacy Policy Data Policy Washington Do Not Sell Terms and Conditions Agreement</p></div>
    </div>
  )
}

export default Footer