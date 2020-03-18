import React from 'react'
import MagList from "../MagList/MagList";
import {Link} from "react-router-dom";

import styles from './Category.module.css';

const Categroy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
         <h3>Categroies</h3>
          <Link to="/aviation">Aviation</Link>
          <Link to="/computer">Computer</Link>
          <Link to="/engineering">Engineering</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/science">Science</Link>
        </div>
        <div className={styles.right}>
         <h3>props:Category name</h3>
         <p>props:category description</p>
         <div className={styles.categroylist}>
         <MagList/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Categroy
